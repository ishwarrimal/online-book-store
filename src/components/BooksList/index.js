import React from "react";
// import { connect } from "react-redux";
import BookDetails from "../BookDetails";

const BookList = () => {
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
  return bookList.map(bookInfo => {
    return <BookDetails {...bookInfo} />;
  });
};

// const mapStateToProps = {
//   bookList: booksList
// };

// export default connect(null, null)(BookList);
export default BookList;
