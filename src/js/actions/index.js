import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, REMOVE_ALL } from '../constants/ActionTypes';

export function addItem(item) {
  const { name, description, count } = item;
  return {
    type: ADD_ITEM,
    payload: {
      id: new Date().valueOf(),
      name,
      description,
      count
    }
  };
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    payload: id
  };
}

export function removeAll() {
  return {
    type: REMOVE_ALL
  };
}

export function editItem(item) {
  const { name, description, count, id } = item;
  return {
    type: EDIT_ITEM,
    payload: {
      id,
      name,
      description,
      count
    }
  };
}
