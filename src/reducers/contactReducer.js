import * as actionTypes from '../actions/actionType';

export default (state = [], action) => {
  switch (action.actionTypes) {
    case actionTypes.CREATE_NEW_CONTACT:
      return [...state, Object.assign({}, action.contact)];
    default:
      return state;
  }
};
