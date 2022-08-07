import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    LinearProgress,
    MobileStepper,
} from '@mui/material';
import { ServerComponent, useAction, useProps } from '@state-less/react-client';
import { useEffect, useState } from 'react';

import { DeleteIcon } from '../Icons';
import { TranslatedMarkdown } from '../translated/Markdown';
import { CounterModel, StarsView } from './Counter';
import { File } from './FileSystem';

export const Post = (props) => {
    const {
        title,
        content,
        fileName: fileNames,
        delete: deletePost,
        id,
        loading,
        renderFile = (fileName) => <File fileName={fileName} />,
    } = props;

    const deleteButton = (
        <IconButton
            disabled={deletePost?.disabled}
            onClick={() => deletePost()}
        >
            <DeleteIcon />
        </IconButton>
    );

    const fileNamesArray = [fileNames].flat();
    const [activeStep, setActiveStep] = useState(0);
    const [hover, setHover] = useState(true);

    useEffect(() => {
        setTimeout(setHover, 3000, false);
    }, []);

    return (
        <Card>
            {loading && <LinearProgress />}
            {title && <CardHeader title={title || ''} />}
            <Grid container>
                <Grid item xs={12} sm={12} md={6} xl={8}>
                    <CardContent>
                        <TranslatedMarkdown>{content}</TranslatedMarkdown>
                    </CardContent>
                </Grid>
                {fileNames && (
                    <Grid item xs={12} sm={12} md={6} xl={4}>
                        <CardMedia
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            <MobileStepper
                                sx={{
                                    width: '100%',
                                    marginBottom: {
                                        xxs: '0px',
                                        xs: '-48px',
                                    },
                                    display: {
                                        xxs: 'flex',
                                        xs: !hover ? 'none' : 'flex',
                                    },
                                }}
                                variant="dots"
                                steps={fileNamesArray.length}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={() => {
                                            setActiveStep(activeStep + 1);
                                        }}
                                        disabled={
                                            activeStep ===
                                            fileNamesArray.length - 1
                                        }
                                    >
                                        Next
                                        <KeyboardArrowRight />
                                    </Button>
                                }
                                backButton={
                                    <Button
                                        size="small"
                                        onClick={() =>
                                            setActiveStep(activeStep - 1)
                                        }
                                        disabled={activeStep === 0}
                                    >
                                        <KeyboardArrowLeft />
                                        Back
                                    </Button>
                                }
                            />
                            {renderFile(fileNamesArray[activeStep])}
                        </CardMedia>
                    </Grid>
                )}
            </Grid>

            <CardActionArea>
                <CardActions>
                    {id && (
                        <ServerComponent name={`counter-${id}`}>
                            <CounterModel View={StarsView} />
                        </ServerComponent>
                    )}
                    <Box sx={{ flexGrow: 1, flex: 1 }} />
                    {deleteButton}
                </CardActions>
            </CardActionArea>
        </Card>
    );
};

export const PostModel = ({ View, ...rest }) => {
    const serverProps = useProps();
    const del = useAction('delete', 'onClick');

    return <View {...serverProps} delete={del} {...rest} />;
};
