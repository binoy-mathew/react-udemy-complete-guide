import * as actionTypes from '../actions';

const initialState = {
    counter : 0
};

const reducer = (state = initialState, action) => {
    /*
    IMPORTANT : Note that you have to ensure that all state variables are set immutably in every action.
    This is because unlike react managed state, in redux, the state is NOT merged. If you dont specify the results array for each action, it will get overwritten.
    */

    switch( action.type ) {
        case actionTypes.INCREMENT:
            /*
            Ensure that you change state immutably. One way of doing that is to use Object.assign()
            Note however that though Object.assign will return a new object, the array within that new object is still pointing to the old array. 
            i.e., the new object is a shallow copy of the original object.
            But in this case, it is ok, because we are modifying the counter value.
            */
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        
        case actionTypes.DECREMENT:
            //A shorter way of creating a new Object is to use the spread operator. Followed by the property that you want to add or overwrite.
            //Again, it will be a shallow copy.
            return {
                ...state,
                counter : state.counter - 1
            };
        
        case actionTypes.ADD:
            return {
                ...state,
                counter : state.counter + action.value
            };

        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter : state.counter - action.value
            };

    }
    
    return state;
};

export default reducer;