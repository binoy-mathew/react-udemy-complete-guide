import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        };
    }

    //can be added to any class. Adding this will make the class usable as an error boundary
    componentDidCatch(error) {
        this.setState({
            hasError: true,
        });
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrrronnnnGG!!</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
