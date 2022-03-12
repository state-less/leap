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

import { CloseIcon, HeartIcon } from '../Icons';
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
        error,
        comments,
        addComment,
        deleteComment,
        pagination,
        pageSize,
        compose = false,
        markdown = false,
    } = props;

    const [comment, setComment] = useState();
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
                        .map((comment, i) => {
                            return (
                                <Comment
                                    key={comment.id}
                                    name={`comment-${comment.id}`}
                                    {...comment}
                                    deleteComment={deleteComment}
                                />
                            );
                        })}
            </List>
            {pagination && (
                <Pagination
                    page={page}
                    count={~~Math.ceil(comments?.length / pageSize)}
                    onChange={(e, v) => setPage(v)}
                />
            )}
            {compose && (
                <>
                    <CardContent>
                        {markdown && (
                            <MDEditor value={comment} onChange={setComment} />
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

export const CommentLikes = (props) => {
    return (
        <Chip
            avatar={
                <IconButton>
                    <HeartIcon />
                </IconButton>
            }
            label="23"
        />
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
    const {
        deleteComment,
        value,
        markdown,
        createdAt,
        owner = null,
        increase,
        id,
        error,
    } = props;
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
                                    <Date
                                        value={createdAt}
                                        fromNow
                                        format="DD.MM HH:mm"
                                    />
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
    if (!name) throw new Error('Comment nees a property "name"');
    const { headers } = useClientContext();

    const props = {};
    return (
        <ServerComponent name={name}>
            <CommentModel View={Component} {...props} {...rest} />
        </ServerComponent>
    );
};

export const Comments = ({
    name = 'comments',
    pagination,
    pageSize = 3,
    compose = false,
    Component = CommentsView,
}) => {
    const props = { pagination, pageSize, compose };
    const { headers } = useClientContext();
    console.error('REACT CLIENT CONTEXT', headers?.Authorization);

    return (
        <ServerComponent name={name}>
            <CommentsModel View={Component} {...props} />
        </ServerComponent>
    );
};