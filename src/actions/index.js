export const ADD_NEW_BOOK = "MAKE_API_CALL";
export const EDIT_BOOK = "EDIT_BOOK";
export const UPDATE_SHOW_FORM = "UPDATE_SHOW_FORM";

export const handleEditBook = id => {
  return { type: EDIT_BOOK, index: id };
};

export const addNewBooks = bookDetails => {
  return { type: ADD_NEW_BOOK, bookDetails: bookDetails };
};

export const updateShowForm = val => {
  return { type: UPDATE_SHOW_FORM, flag: val };
};
