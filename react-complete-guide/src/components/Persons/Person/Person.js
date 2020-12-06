import React, { Component } from 'react';
import Aux from '../../../hoc/aux';
import withClass from '../../../hoc/withClass';

import './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            // <div className="Person">
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
    }

}

export default withClass(Person, 'Person');
