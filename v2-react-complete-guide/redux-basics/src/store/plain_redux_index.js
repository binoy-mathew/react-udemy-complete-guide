import { createStore } from 'redux';

const initialState = { counter:0, showCounter: 0 };

const counterReducer = (state = initialState, action) => {
    console.log('in store by value is ', action.by);
    if (action.type === 'increment') {
        return {
            counter: state.counter + (action.by ? action.by : 1)
        };
    }
    else if (action.type === 'decrement') {
        return {
            counter: state.counter - (action.by ? action.by : 1)
        };
    }
  
    return state; 
};

const store = createStore(counterReducer);

export default store;