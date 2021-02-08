import * as actionTypes from './actions';

const initialState = {
    counter : 0,
    results : []
};

const reducer = (state = initialState, action) => {
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

        case actionTypes.STORE_RESULT:
            /*
            In this case, it is not enough to create a shallow copy. We need to copy the array into a separate array.
            The way we do it is by using concat() which returns a new array (as opposed to push() which updates the original array).
            */
            return {
                ...state,
                results : state.results.concat({id : new Date(), value : state.counter})
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