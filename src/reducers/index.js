import { ADD_NEW_BOOK } from "../actions";
import { EDIT_BOOK } from "../actions";

const bookList = [
  {
    id: 1,
    name: "First Book",
    description: "This is the description",
    author: "ishwar",
    price: "125"
  },
  {
    id: 2,
    name: "Second Book",
    description: "This is the description",
    author: "ishwar",
    price: "125"
  }
];
const reducer = (state = {}, action) => {
  state.bookList = bookList;
  state.showForm = false;
  state.lastIndex = 2;
  state.selectedIndex = null;
  switch (action.type) {
    case ADD_NEW_BOOK:
      const newState = state.bookList.push(action.payload);
      return { ...newState };
    case EDIT_BOOK:
      return { ...state, selectedIndex: action.index, showForm: true };
    default:
      return state;
  }
};

export default reducer;
