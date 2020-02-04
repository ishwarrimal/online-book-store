import React from "react";
import { connect } from "react-redux";

import BookDetails from "../BookDetails";
import { handleEditBook } from "../../actions";

const BookList = ({ searchBook, bookList, editBookHandler }) => {
  if (!bookList) {
    return <h1>No Books</h1>;
  }
  return bookList.map(bookInfo => {
    return (
      bookInfo &&
      bookInfo.title &&
      bookInfo.title.toLowerCase().includes(searchBook) && (
        <BookDetails {...bookInfo} handleEdit={editBookHandler} />
      )
    );
  });
};

const mapStateToProps = ({ bookList }) => ({
  bookList: [...bookList]
});

const mapDispatchToProps = {
  editBookHandler: handleEditBook
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
