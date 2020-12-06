import React from 'react';

/*
const withClass = props => (
    <div className={props.myClasses}>{props.children}</div>
);
*/

const withClass = (WrappedComponent, className) => {
        return props => (
            <div className={className}>
                <WrappedComponent />
            </div>
        );
};

export default withClass;
