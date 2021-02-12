import * as actionTypes from '../actions';

const initialState = {
    results : []
};

const reducer = (state = initialState, action) => {
    /*
    IMPORTANT : Note that you have to ensure that all state variables are set immutably in every action.
    This is because unlike react managed state, in redux, the state is NOT merged. If you dont specify the results array for each action, it will get overwritten.
    */

    switch( action.type ) {
        case actionTypes.STORE_RESULT:
            /*
            In this case, it is not enough to create a shallow copy. We need to copy the array into a separate array.
            The way we do it is by using concat() which returns a new array (as opposed to push() which updates the original array).
            */
            //state.ctr will not work because ctr is not part of this reducer's state. This value has to come from action.
            //In the reducer, you do not have access to the global state, only to the local state of the reducer.
            return {
                ...state,
                results : state.results.concat({id : new Date(), value : action.result})
            };

        case actionTypes.DELETE_RESULT:
            //Dont do a state.results.splice on the existing array because that modifies the existing array. Instead create a new array and splice
            //Or you can use array.filter 
            const newArray = state.results.filter(e => e.id !== action.resultElementId);
            return {
                ...state,
                results : newArray
            };
    }
    
    return state;
};

export default reducer;