import * as React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Loader = props => {
    return (
        <div>
            <ClipLoader
                sizeUnit={"px"}
                size={150}
                color={'#123abc'}
                loading={props.isLoading}
            />
        </div>
    )
};

export default Loader;