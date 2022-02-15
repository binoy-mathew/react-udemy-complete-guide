import { configureStore } from '@reduxjs/toolkit';


import counterReducer from './counter';
import authReducer from './auth';


//Instead of using the createStore() toolkit provides another alternative configureStore()
//const store = createStore(counterSlice.reducer);

//As of now, we only are using one slice, hence we can set the reducer property below directly to the one reducer we have.
//Note that it is a reducer, not reducers property.
//If there were multiple slices, we could pass in an object. eg. reducer: {counter: counterSlice.reducer, anotherCounter: anotherCounterSlice.reducer }
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
