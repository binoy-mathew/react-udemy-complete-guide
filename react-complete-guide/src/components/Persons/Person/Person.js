import React, { Component } from 'react';
import Aux from '../../../hoc/aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

import './Person.css';

class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElRef = React.createRef();
    }

    componentDidMount() {
        //this.inputElRef.focus();
        this.inputElRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            // <div className="Person">
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text"
                    //ref={(inputElRef) => {this.inputElRef = inputElRef}}
                    ref={this.inputElRef}
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
    }

}

Person.propTypes = {
    click : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number,
    changed : PropTypes.func
};

export default withClass(Person, 'Person');
