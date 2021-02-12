import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    
    render () {
        /*
        Use the props made available by the redux store below.
        */

        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />

                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>)}
                </ul>
            </div>
        );
    }
}

/*
The state that we want to access and manage for this component.
We define here a function which takes the state stored in redux as input and returns a javascript object, a Map of user defined prop names 
and the corresponding part of the state stored in redux.
The state parameter will be coming in from redux, which you have defined in the reducer file.
Here we are telling redux to read the global state property "counter" and store it in a "ctr" property 
which will be made available to the current component as a "ctr" props.
NOTE that the state below is being referenced from their individual reducer "keys"
*/
const mapStateToProps = state => {
    return {
        ctr : state.ctr.counter,
        storedResults : state.res.results
    };
};

/*
What kind of actions to I want to dispatch from this component?
The property Keys (onIncrementCounter  etc) become the name of the props that will be available to this component. 
And it will hold a function which will invoke the dispatch function passing in a Javascript object which contains mandatorily a "type" parameter 
and optionally any number of additional parameters that you need.
*/
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({ type : actionTypes.INCREMENT }),
        onDecrementCounter : () => dispatch({ type : actionTypes.DECREMENT }),
        onAddCounter : () => dispatch({ type : actionTypes.ADD, value : 5 }),
        onSubtractCounter : () => dispatch({ type : actionTypes.SUBTRACT , value : 5}),
        onStoreResult : (result) => dispatch({ type : actionTypes.STORE_RESULT, result : result}),
        onDeleteResult : (index) => dispatch({ type : actionTypes.DELETE_RESULT, resultElementId : index})
    };
};


/*
connect is a HOC, rather it is a function which RETURNS a HOC function TO which we pass the current container component as a parameter.
You can pass 2 parameters to connect
    - the part of the state that you want to manage in this component.
    - the dispatch actions that you want to send from this component.
Both the above are optional parameters, you can ignore the DispatchAction or pass a null as the state parameter.
*/
export default connect(mapStateToProps, mapDispatchToProps)(Counter);  
