import React from 'react';
import { Loader } from 'rsuite';

const loaderStyle = {
    height: '100%',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.425)',
    position: 'fixed',
    top: '0%',
    left: '0%',
    zIndex: '9999',
};

const LoaderSpinner = () => {
    return (
        <div style={loaderStyle} id="loadingSpinner">
            <Loader size="md" inverse center />
        </div>
    );
};

export default LoaderSpinner;
