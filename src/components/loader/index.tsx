import * as React from 'react';
import LoaderWrapper from './styled';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => {
    const useStyles = makeStyles((theme: Theme) => createStyles({ progress: { margin: theme.spacing(2) }}));

    const classes = useStyles();

    return (
        <LoaderWrapper >
            <CircularProgress className = {classes.progress}/>
        </LoaderWrapper>
    )
};

export default Loader;