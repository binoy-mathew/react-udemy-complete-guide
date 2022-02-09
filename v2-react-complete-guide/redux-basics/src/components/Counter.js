import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Component } from 'react';

/*
const Counter = () => {
  const toggleCounterHandler = () => {};
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({
      type: 'increment'
    });
  };
  
  const decrementHandler = () => {
    dispatch({
      type: 'decrement'
    });
  };



  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
*/


class Counter extends Component {
  incrementHandler(by) {
    console.log('increment by ', by);
    this.props.increment(by);
  }

  decrementHandler(by) {
    console.log('decrement by ', by);
    this.props.decrement(by);
  }

  toggleCounterHandler() {

  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this, 3)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this, 2)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}


//First argument to connect is a function which maps redux state to props which will be received by Counter component
//This function should return an object with the slice of the state that the Counter component needs.
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

//Second argument to connect is a function,
//Return an object where the key is a prop name that we can use within the Counter component.
//Value is a function in which we call the dispatch function with the required action.
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (by) => dispatch({ type: 'increment', by }),
    decrement: (by) => dispatch({ type: 'decrement', by })
  };
};


//The way we use connect is to execute the function that connect returns.
//connect is a higher order component.
//connect takes 2 arguments, both functions.
//this will also set up a subscription to the store.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);


