import React from 'react';

const wrapper = (WrappedComponent: React.FC, States: {}, Actions: {}) => {
    return (<WrappedComponent {...{ ...States, ...Actions }} />)
}

export default wrapper