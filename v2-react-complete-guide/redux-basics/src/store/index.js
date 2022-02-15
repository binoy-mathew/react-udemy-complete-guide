import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: 0 };

//With createSlice, we are creating a 'slice' of our global state.
//CreateSlice wants an object as argument.
//When we have different un-related states, we could create different slices in different files even.
//Every slice needs a name, an identifier for that slice
//We also provdide an initialState.
//We also need to add reducers - these are again an object, which contains all the reducers that this slice needs.
//In this reducer, you can add methods, with any name you want. But these methods will be used later.
//Every method will get the state and action as parameter.
//Each of these methods will automatically called for you based on what action was invoked. That means you dont need an if-check here.
//It may appear below that we are directly mutating the state, but behind the scenes, Redux Toolkit will take care of creating a copy of the object and setting that into the state.
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },
    decrement(state, action) {
      state.counter -= action.payload;
    },
    toggleCounter(state, action) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

//Instead of using the createStore() toolkit provides another alternative configureStore()
//const store = createStore(counterSlice.reducer);

//As of now, we only are using one slice, hence we can set the reducer property below directly to the one reducer we have.
//Note that it is a reducer, not reducers property.
//If there were multiple slices, we could pass in an object. eg. reducer: {counter: counterSlice.reducer, anotherCounter: anotherCounterSlice.reducer }
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
