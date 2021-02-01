import React, { Component } from 'react';

const asyncComponent = (importComponent) => {   //importComponent should be a function ref
    return class extends Component {
        state = {
            component: null
        };

        componentDidMount() {
            importComponent()
                .then(cmp => {  //cmp will have one property - default - which is the component loaded dynamically
                    this.setState({
                        component : cmp.default
                    });
                });
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null
        }
    }
};

export default asyncComponent;
