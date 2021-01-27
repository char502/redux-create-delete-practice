import * as actionTypes from '../actions/actionType';

const initialState = {
  arr: [],
};

const contactReducer = (state = [], action) => {
  switch (action.actionTypes) {
    case actionTypes.CREATE_NEW_CONTACT:
      // return [...state, Object.assign({}, action.contact)];
      return {
        ...state,
        arr: [...state.arr, action.contact],
      };
    case actionTypes.REMOVE_CONTACT:
      return state.filter((data, i) => i !== action.id);
    default:
      return state;
  }
};

export default contactReducer;

// Here, one thing to note that, we have not mutated the state directly instead we have returned a new state.

// So, the new state is original state array + new contact data and returns a new collection.
