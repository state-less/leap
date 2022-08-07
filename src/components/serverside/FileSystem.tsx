import { PlusOneOutlined } from '@mui/icons-material';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    CircularProgress,
    Grid,
    IconButton,
    LinearProgress,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Modal,
    Pagination,
    Skeleton,
    TextField,
} from '@mui/material';
import { ServerComponent, useAction, useProps } from '@state-less/react-client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { atom, PrimitiveAtom, useAtom } from 'jotai';
import { useTranslation } from 'react-i18next';
import { DeleteIcon, FileUploadIcon, InsertDriveFileIcon } from '../Icons';
import { CHUNK_SIZE } from '../../config';
import { blobToDataURL } from '../../lib/util';

const chunkSize = CHUNK_SIZE;

export const FileSelector = (props) => {
    const { files = [], onSelect } = props;
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    if (files === null) {
        return (
            <IconButton disabled>
                <InsertDriveFileIcon />
            </IconButton>
        );
    }

    const handleSelect = (name) => {
        setSelected(name);
    };

    return (
        <>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '50%',
                    }}
                >
                    <Card sx={{ width: '100%' }}>
                        <Grid container spacing={1} sx={{ width: '100%' }}>
                            <Grid item xs={12} sm={6}>
                                <List
                                    sx={{
                                        maxHeight: '250px',

                                        overflow: 'scroll',
                                    }}
                                >
                                    {files.map((file) => {
                                        return (
                                            <ListItem
                                                selected={file === selected}
                                                button
                                                onClick={() =>
                                                    handleSelect(file)
                                                }
                                            >
                                                <ListItemText primary={file} />
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {selected && <File fileName={selected} />}
                            </Grid>
                        </Grid>
                        <CardActions>
                            <Button
                                onClick={() => {
                                    onSelect(selected);
                                    setOpen(false);
                                }}
                            >
                                {t('buttons.confirm')}
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </Modal>
            <IconButton onClick={() => setOpen(true)}>
                <InsertDriveFileIcon />
            </IconButton>
        </>
    );
};

export const FilesViewList = (props) => {
    const { files = [], pageSize = 10, onClick, active, onDelete } = props;
    const [page, setPage] = useState(1);
    if (files === null) {
        return null;
    }
    return (
        <>
            <List>
                {files.map((name) => {
                    return (
                        <ListItem
                            selected={name === active}
                            button
                            onClick={() => onClick(name)}
                        >
                            <ListItemText primary={name} />
                            <ListItemSecondaryAction
                                onClick={() => onDelete(name)}
                            >
                                <DeleteIcon />
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
            <Pagination
                page={page}
                count={Math.ceil(files.length / pageSize)}
                onChange={(e, v) => setPage(v)}
            />
        </>
    );
};

export const FilesView = (props) => {
    const { del } = props;
    const [fileName, setFileName] = useState(null);
    const { t } = useTranslation();

    return (
        <Card>
            <CardHeader title={t('leap.filesystem.files.title')} />
            <Grid container>
                <Grid item xs={8}>
                    <CardContent>
                        <FilesViewList
                            {...props}
                            onClick={(name) =>
                                setFileName(name === fileName ? null : name)
                            }
                            onDelete={(name) => del({ name })}
                            active={fileName}
                        />
                    </CardContent>
                </Grid>
                <Grid item xs={4} sx={{ height: '100%' }}>
                    <CardContent>
                        <FileView fileName={fileName} {...props} />
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

const atoms: Record<string, PrimitiveAtom<string | null>> = {};
const cache: Record<string, any> = {};
export const FileView = (props) => {
    const { fileName, getChunk } = props;

    const uriAtom = useMemo(() => {
        // eslint-disable-next-line no-return-assign
        return (
            atoms[fileName] ||
            (atoms[fileName] = atom<string | null>(null) as PrimitiveAtom<
                string | null
            >)
        );
    }, [fileName]);

    const [dataUri, setDataUri] = useAtom(uriAtom);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (fileName) {
            if (typeof cache[fileName] !== 'undefined' || getChunk === null) {
                return;
            }
            cache[fileName] = null;
            (async () => {
                const chunks = [];
                let chunk;
                do {
                    setLoading(true);
                    // eslint-disable-next-line no-await-in-loop
                    chunk = await getChunk({ fileName, chunkSize });
                    chunks.push(chunk);

                    if (chunk === undefined) {
                        // eslint-disable-next-line no-return-assign
                        return (cache[fileName] = undefined);
                    }
                } while (chunk && chunk !== null && chunkSize === chunk.length);
                const str = chunks.join('');
                const bytes = new Uint8Array(str.length);
                for (let i = 0; i < str.length; i += 1) {
                    bytes[i] = str.charCodeAt(i);
                }

                const blob = new Blob([bytes], { type: 'image/png' });
                const uri = await blobToDataURL(blob);

                cache[fileName] = uri;

                setDataUri(uri.toString());
                setLoading(false);

                return undefined;
            })();
        }
    });

    return (
        <CardMedia>
            {loading && <LinearProgress variant="indeterminate" />}
            {!dataUri && <Skeleton height={150} />}
            {fileName && dataUri && <img alt={fileName} src={dataUri} />}
        </CardMedia>
    );
};

export const FileUploadButton = (props) => {
    const { createItem, upload, save, onSuccess } = props;
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [fileNames, setFileNames] = useState([]);
    const [file, setFile] = useState(null);

    const onDrop = (files) => handleUpload({ target: { files } });

    const handleUpload = (e) => {
        const { files } = e.target;

        /**
         * TODO: This should use files.map and Promise.all
         */
        // eslint-disable-next-line no-restricted-syntax
        for (const file of files) {
            setFile(file);
            const reader = new FileReader();

            reader.onload = async (e) => {
                const fileData = e.target.result;
                const { fileName } = await createItem({
                    size: file.size,
                    name: file.name,
                    data: fileData,
                });
                setUploading(true);
                for (
                    let i = 0;
                    i <= fileData?.toString().length;
                    i += chunkSize
                ) {
                    const chunk = fileData?.slice(i, i + chunkSize);
                    await upload({ fileName, chunk });
                    setProgress(
                        Math.min(100, (100 / file.size) * (i + chunkSize))
                    );
                }

                const result = await save({ fileName });
                setUploading(false);
                setFileNames((fileNames) => [...fileNames, fileName]);
            };

            reader.readAsBinaryString(file);
        }
    };

    useEffect(() => {
        if (fileNames.length > 0) {
            onSuccess?.(fileNames);
        }
    }, [fileNames]);

    const ref = useRef<HTMLInputElement>();

    return (
        <>
            <input
                ref={ref}
                id="file-input"
                type="file"
                style={{ display: 'none' }}
                onChange={handleUpload}
                multiple
            />
            <IconButton
                disabled={upload?.disabled}
                onClick={(e) => ref.current.click?.()}
            >
                {uploading ? (
                    <CircularProgress value={(100 / chunkSize) * progress} />
                ) : (
                    <FileUploadIcon />
                )}
            </IconButton>
        </>
    );
};

export const FileUploadView = (props) => {
    const { createItem, upload, save, getChunk, onSuccess } = props;
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [fileName, setFileName] = useState(null);
    const [file, setFile] = useState(null);

    const onDrop = (files) => handleUpload({ target: { files } });
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    const reset = () => {
        setFileName(null);
        setFile(null);
    };
    const handleUpload = (e) => {
        console.log(e.target.files);
        const file = e.target.files[0];
        setFile(file);
        const reader = new FileReader();
        const blob = new Blob();
        reader.onload = async (e) => {
            const fileData = e.target.result;
            console.log('FileData', file, fileData, blob);
            const { fileName } = await createItem({
                size: file.size,
                name: file.name,
                data: fileData,
            });
            setUploading(true);
            for (let i = 0; i <= fileData?.toString().length; i += chunkSize) {
                const chunk = fileData?.slice(i, i + chunkSize);
                console.log('Sending chunk', fileName, i);
                await upload({ fileName, chunk });
                setProgress(Math.min(100, (100 / file.size) * (i + chunkSize)));
            }

            const result = await save({ fileName });
            console.log('Saved File', result);
            setUploading(false);
            setFileName(fileName);
            onSuccess(fileName);
        };

        reader.readAsBinaryString(file);
    };
    const ref = useRef();
    return (
        <div>
            <Card>
                {uploading && (
                    <LinearProgress
                        variant={
                            file?.size < chunkSize
                                ? 'indeterminate'
                                : 'determinate'
                        }
                        value={progress}
                    />
                )}
                {!fileName && (
                    <CardActionArea>
                        <Box
                            {...getRootProps()}
                            sx={{
                                borderStyle: 'solid',
                                borderWidth: '1px',
                                borderColor: isDragActive
                                    ? 'success.main'
                                    : 'info.main',
                                // border: '1px solid',
                            }}
                        >
                            <input {...getInputProps()} />
                            <CardActions>
                                {!fileName && (
                                    <>
                                        <IconButton>
                                            {isDragActive ? (
                                                <PlusOneOutlined />
                                            ) : (
                                                <InsertDriveFileIcon />
                                            )}
                                        </IconButton>
                                        <TextField
                                            inputRef={ref}
                                            sx={{ visibility: 'hidden' }}
                                            type="file"
                                            id="fileupload"
                                            onChange={handleUpload}
                                        />
                                    </>
                                )}
                            </CardActions>
                        </Box>
                    </CardActionArea>
                )}

                {fileName && (
                    <>
                        <FileView getChunk={getChunk} fileName={fileName} />
                        <CardActions>
                            <IconButton onClick={reset}>
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                    </>
                )}
            </Card>
        </div>
    );
};

export const FileSystemModel = (props) => {
    const { children, View, ...rest } = props;
    const serverProps = useProps();
    const createItem = useAction('create', 'onClick');
    const del = useAction('del', 'onClick');
    const upload = useAction('upload', 'onClick');
    const save = useAction('save', 'onClick');
    const getChunk = useAction('getChunk', 'onClick');

    return (
        <View
            {...serverProps}
            {...rest}
            createItem={createItem}
            upload={upload}
            save={save}
            getChunk={getChunk}
            del={del}
        >
            {children}
        </View>
    );
};

export const FileSystem = ({
    name = 'filesystem',
    Component = FilesView,
    ...props
}) => {
    return (
        <ServerComponent name={name}>
            <FileSystemModel View={Component} {...props} />
        </ServerComponent>
    );
};

export const FileUpload = ({
    name = 'filesystem',
    Component = FileUploadView,
    ...props
}) => {
    return (
        <ServerComponent name={name}>
            <FileSystemModel View={Component} {...props} />
        </ServerComponent>
    );
};

export const File = ({
    name = 'filesystem',
    Component = FileView,
    ...props
}) => {
    return (
        <ServerComponent name={name}>
            <FileSystemModel View={Component} {...props} />
        </ServerComponent>
    );
};
