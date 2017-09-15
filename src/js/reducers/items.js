import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, REMOVE_ALL } from '../constants/ActionTypes';

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return [
        ...state,
        payload
      ];
    case REMOVE_ITEM:
      return state.filter(item => item.id !== payload);
    case REMOVE_ALL:
      return [];
    case EDIT_ITEM:
      return state.map(item => (item.id === payload.id ? payload : item));
    default:
      return state;
  }
};
