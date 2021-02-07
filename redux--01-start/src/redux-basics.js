const redux = require('redux');
const createStore = redux.createStore; //creteStore is a function, but dont execute it here.

const initialState = {
    counter : 0
};

//Reducer
const rootReducer = (oldState = initialState, action) => {     //takes the old state and the action as parameter and returns the new updated state.
    if (action.type === 'INC_COUNTER') {
        return {    //dont mutate existing state. Create a copy.
            ...oldState,
            counter : oldState.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...oldState,
            counter : oldState.counter + action.value
        };
    }

    return oldState;
};

//Store
const store = createStore(rootReducer);    //store needs to be initialized with a reducer
//You can have multiple reducers, but they will all be merted into a single reducer.

//Subscription - typically setup immediately after the store is created.
store.subscribe(() => {
    console.log('[Subscription] :: ', store.getState());
});


//Dispatching Action - Call the dispatch method on store. 'type' property is mandatory.
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value : 10 });
console.log(store.getState());
