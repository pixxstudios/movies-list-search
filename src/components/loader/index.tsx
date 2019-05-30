import * as React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import LoaderWrapper from './styled';

const Loader = props => {
    return (
        <LoaderWrapper>
            <SyncLoader
                sizeUnit={"px"}
                size={15}
                color={'#F5A623'}
                loading={props.isLoading}
            />
        </LoaderWrapper>
    )
};

export default Loader;