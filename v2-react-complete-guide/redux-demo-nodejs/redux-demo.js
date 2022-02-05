const redux = require('redux');

//Define the reducer which will be responsible for updating the store.
//Important to give the state a default value, because the first time, state will be null.
const reducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }
    else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }

    return state;    
};

//Create the Redux Store, passing in a reducer which is responsible for updating the store.
//The store should always know the reducer that is responsible for updating the store.
const store = redux.createStore(reducer);


//Create a subscriber to the store. We define a function below which will be used to subscribe to the store.
const counterSubscriber = () => {
    const latestState = store.getState();   //getState is a function available on the store.
    console.log(latestState);
}

//Create the subscription to the store, passing in the reference to the subscriber. 
//In other words, make the store AWARE of the subscriber to the store.
store.subscribe(counterSubscriber);

//Update the store by calling the dispatch() function passing in an 'Action'
store.dispatch({type : 'increment'});
store.dispatch({type : 'decrement'});

