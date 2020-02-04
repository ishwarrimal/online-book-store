import { ADD_NEW_BOOK, UPDATE_SHOW_FORM } from "../actions";
import { EDIT_BOOK } from "../actions";

const bookList = [
  {
    id: 1,
    title: "First Book",
    description: "This is the description",
    author: "ishwar",
    price: "125"
  },
  {
    id: 2,
    title: "Second Book",
    description: "This is the description",
    author: "ishwar",
    price: "125"
  }
];
const dummyState = {
  bookList: bookList,
  showForm: false,
  lastIndex: 2,
  selectedIndex: null
};
const reducer = (state = dummyState, action) => {
  switch (action.type) {
    case ADD_NEW_BOOK:
      state.bookList.push(action.bookDetails);
      state.showForm = false;
      return { ...state };
    case EDIT_BOOK:
      return { ...state, selectedIndex: action.index, showForm: true };
    case UPDATE_SHOW_FORM:
      state.showForm = action.flag;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
