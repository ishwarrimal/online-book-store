import React from "react";
import { connect } from "react-redux";

import BookDetails from "../BookDetails";
import { handleEditBook } from "../../actions";

const BookList = ({ bookList, editBookHandler }) => {
  return bookList.map(bookInfo => {
    return <BookDetails {...bookInfo} handleEdit={editBookHandler} />;
  });
};

const mapStateToProps = ({ bookList }) => ({
  bookList: bookList
});

const mapDispatchToProps = {
  editBookHandler: handleEditBook
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
