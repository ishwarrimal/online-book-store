// action types
export const ADD_NEW_BOOK = "MAKE_API_CALL";
export const EDIT_BOOK = "EDIT_BOOK";

// action creators
export const handleEditBook = id => {
  return { type: EDIT_BOOK, index: id };
};
