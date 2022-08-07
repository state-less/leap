import { ExpandMore } from '@mui/icons-material';
import {
    Card,
    CardActions,
    CardContent,
    Grid,
    IconButton,
    LinearProgress,
    Pagination,
    TextField,
} from '@mui/material';
import {
    ServerComponent,
    useAction,
    useClientContext,
    useProps,
} from '@state-less/react-client';
import { useState } from 'react';
import { TranslatedAlert } from '../translated/Alert';
import { TranslatedButton } from '../translated/Button';
import { File, FileSelector, FileSystem, FileUploadButton } from './FileSystem';
import { DismissableAlert } from '../alert/DismissableAlert';
import { Post, PostModel } from './Post';

export const renderImage = (src) => <img src={src} />;

export const FeedView = (props) => {
    const { identity } = useClientContext();
    const {
        items = [],
        createItem,
        pageSize = 10,
        renderFile,
        loading,
    } = props;

    const [page, setPage] = useState(1);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [fileNames, setFileNames] = useState(null);
    const [expanded, setExpanded] = useState(false);

    const fileNamesArray = [fileNames].flat().filter(Boolean);

    const titleField = (
        <TextField
            sx={{ mt: +expanded }}
            label="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onClick={(e) => e.stopPropagation()}
        />
    );
    const contentField = (
        <TextField
            sx={{ mt: +expanded }}
            fullWidth
            multiline
            rows={5}
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onClick={(e) => e.stopPropagation()}
        />
    );

    return (
        <div>
            <Card>
                {!items.length && !loading && (
                    <TranslatedAlert severity="warning">
                        alerts.noData
                    </TranslatedAlert>
                )}
                <CardContent>
                    <DismissableAlert
                        name="alerts.feed.thoughts"
                        severity="info"
                    >
                        alerts.feed.thoughts
                    </DismissableAlert>

                    <Grid container>
                        <Grid
                            item
                            xs={fileNamesArray.length === 1 ? 8 : 12}
                            md={fileNamesArray.length === 1 ? 10 : 12}
                        >
                            {expanded && titleField}
                            {contentField}
                        </Grid>
                        <Grid
                            item
                            xs={fileNamesArray.length === 1 ? 4 : 12}
                            md={fileNamesArray.length === 1 ? 2 : 12}
                            sx={{ height: '100%' }}
                            container
                        >
                            {fileNames?.map((fileName) => {
                                return (
                                    <Grid
                                        item
                                        xs={
                                            fileNamesArray.length === 1 ? 12 : 4
                                        }
                                        sx={{ ml: 1 }}
                                    >
                                        <File
                                            key={fileName}
                                            fileName={fileName}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </CardContent>

                <CardActions>
                    <TranslatedButton
                        variant="contained"
                        disabled={!content || !identity}
                        onClick={async (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            await createItem({
                                title,
                                content,
                                fileName: fileNames,
                            });

                            setTitle('');
                            setContent('');
                        }}
                    >
                        POST
                    </TranslatedButton>
                    <FileSystem
                        Component={FileUploadButton}
                        onSuccess={(names) => {
                            console.log('Success.. setting filename', names);
                            setFileNames(names);
                        }}
                    />
                    <IconButton
                        onClick={() => setExpanded(!expanded)}
                        sx={{
                            transition: 'transform 200ms',
                            transform: expanded ? 'rotate(180deg)' : '',
                        }}
                    >
                        <ExpandMore />
                    </IconButton>

                    <FileSystem
                        Component={FileSelector}
                        onSelect={(name) => setFileNames([name].flat())}
                    />
                </CardActions>
                {loading && <LinearProgress />}
            </Card>
            {(items || [])
                .slice()
                .reverse()
                .slice((page - 1) * pageSize, page * pageSize)
                .map((item) => {
                    return (
                        <ServerComponent key={item.id} name={`post-${item.id}`}>
                            <PostModel
                                View={Post}
                                title={item.title}
                                content={item.content}
                                fileName={item.fileName}
                                renderFile={renderFile}
                            />
                        </ServerComponent>
                    );
                })}
            <Pagination
                count={Math.ceil(items.length / pageSize)}
                onChange={(e, p) => setPage(p)}
            />
        </div>
    );
};

export const FeedModel = (props) => {
    const { children, View = FeedView, ...rest } = props;
    const serverProps = useProps();
    const createItem = useAction('createItem', 'onClick');

    return (
        <View {...serverProps} {...rest} createItem={createItem}>
            {children}
        </View>
    );
};

export const Feed = ({ name = 'feed', Component = FeedView, ...props }) => {
    return (
        <ServerComponent name={name}>
            <FeedModel View={Component} {...props} />
        </ServerComponent>
    );
};
