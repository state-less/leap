import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Chip,
    IconButton,
    LinearProgress,
    List,
    TextField,
    Typography,
    Alert,
    Pagination,
} from '@mui/material';

import {
    ServerComponent,
    useAction,
    useClientContext,
    useProps,
} from '@state-less/react-client';

import MDEditor from '@uiw/react-md-editor';

import { FunctionComponent, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import { TranslatedButton } from '../translated/Button';
import { Date } from '../Date';

import { CloseIcon } from '../Icons';
import { Votes } from '../Counter';
import { CounterModel } from './Counter';
import { TranslatedAlert } from '../translated/Alert';
import { ModelProps } from '../../lib/static/types';

export type CommentsInterface = {
    addComment: (text: string) => void;
    deleteComment: (text: string) => void;
};

export type CommentsProps = ModelProps & {
    View: FunctionComponent<CommentsInterface>;
};
/**
 * Comments model. Gather's props and renders a View with it.
 * @param param0
 * @returns
 */
export const CommentsModel: FunctionComponent<CommentsProps> = ({
    View,
    ...rest
}) => {
    const props = useProps();
    const addComment = useAction('addComment', 'onClick');
    const deleteComment = useAction('deleteComment', 'onClick');
    // return <>Props {JSON.stringify(props)}</>
    return (
        <View
            {...props}
            {...rest}
            addComment={addComment}
            deleteComment={deleteComment}
        />
    );
};

export const CommentsView = (props) => {
    const {
        comments,
        addComment,
        deleteComment,
        pagination,
        pageSize,
        compose = false,
        markdown = false,
    } = props;

    const [comment, setComment] = useState<string>('');
    const [page, setPage] = useState(1);
    const [err, setError] = useState(null);

    if (!comments)
        return (
            <>
                <TranslatedAlert label="COMMENTS_LOADING" />
                <LinearProgress />
            </>
        );

    return (
        <Card>
            {err && <Alert severity="error">{err.message}</Alert>}
            <List>
                {comments &&
                    comments.slice &&
                    comments
                        .slice()
                        .reverse()
                        .slice(-pageSize + page * pageSize, page * pageSize)
                        .map((commentData) => {
                            return (
                                <Comment
                                    key={commentData.id}
                                    name={`comment-${commentData.id}`}
                                    {...commentData}
                                    deleteComment={deleteComment}
                                />
                            );
                        })}
            </List>
            {pagination && (
                <Pagination
                    page={page}
                    count={~~Math.ceil(~~comments?.length / pageSize)}
                    onChange={(e, v) => setPage(v)}
                />
            )}
            {compose && (
                <>
                    <CardContent>
                        {markdown && (
                            <MDEditor
                                value={comment}
                                onChange={(e) => setComment(e)}
                            />
                        )}
                        {!markdown && (
                            <TextField
                                disabled={addComment.disabled}
                                multiline
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                fullWidth
                            />
                        )}
                        <TranslatedButton
                            disabled={addComment.disabled}
                            label="BUTTON_COMMENT_ADD"
                            color="primary"
                            onClick={async () => {
                                try {
                                    await addComment(comment);
                                    setComment('');
                                    setError(null);
                                } catch (e) {
                                    setError(e);
                                }
                            }}
                        />
                    </CardContent>
                    <CardActions />
                </>
            )}
        </Card>
    );
};

export const CommentMarkdown = (props) => {
    const { markdown } = props;

    return <Typography>{markdown}</Typography>;
};

const truncateName = (name = '') => {
    if (/^0x/.test(name)) return `${name.slice(0, 3)}...${name.slice(-3)}`;

    if (name.length > 15) return `${name.slice(0, 12)}...`;
    return name;
};

export const CommentView = (props) => {
    const { deleteComment, createdAt, owner = null, id, error } = props;
    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });
    return (
        <animated.div style={styles}>
            <Card>
                {error?.message && (
                    <Alert severity="error">{error.message}</Alert>
                )}
                <div className="flex">
                    <ServerComponent name={`counter-comment-${id}`}>
                        <CounterModel View={Votes} />
                    </ServerComponent>
                    <CardContent />

                    <CardContent
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <CardHeader
                            sx={{ height: 0 }}
                            action={
                                !deleteComment.disabled && (
                                    <IconButton
                                        disabled={deleteComment.disabled}
                                        onClick={() => deleteComment(id)}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                )
                            }
                        />
                        <div>
                            <CommentMarkdown {...props} />
                            <div className="flex">
                                <div className="mla" />
                                {owner && (
                                    <Chip
                                        avatar={
                                            <Avatar
                                                alt="react server leap profile-picture"
                                                src={owner?.picture}
                                            />
                                        }
                                        label={truncateName(owner?.name)}
                                    />
                                )}
                                {createdAt && (
                                    <Date fromNow format="DD.MM HH:mm">
                                        {createdAt}
                                    </Date>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </animated.div>
    );
};
export const CommentModel = ({ View, ...rest }) => {
    const props = useProps();
    const del = useAction('deleteComment', 'onClick');
    // return <>Props {JSON.stringify(props)}</>
    return <View {...props} {...rest} deleteComment={del} />;
};

const Comment = ({ name, Component = CommentView, ...rest }) => {
    if (!name) throw new Error('Comment needs a property "name"');
    return (
        <ServerComponent name={name}>
            <CommentModel View={Component} {...rest} />
        </ServerComponent>
    );
};

export const Comments = ({
    name = 'comments',
    host = 'localhost',
    pagination,
    pageSize = 3,
    compose = false,
    Component = CommentsView,
}) => {
    const props = { pagination, pageSize, compose };

    return (
        <ServerComponent name={name} host={host}>
            <CommentsModel View={Component} {...props} />
        </ServerComponent>
    );
};
