import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import BooksList from "./components/BooksList";
import AddBook from "./components/AddBook";
import { addBookToBooksList, updateShowForm } from "./actions";

function App({
  addBookToBooksList,
  newIndex,
  showForm,
  updateShowForm,
  selectedIndex,
  bookList
}) {
  const [searchBook, setSearchBook] = useState("");
  const handleSearchChange = event => {
    setSearchBook(event.target.value);
  };
  const handleAddBookClick = () => {
    updateShowForm(true);
  };
  const handleFormClose = () => {
    updateShowForm(false);
  };
  console.log(newIndex);
  return (
    <div className="App">
      <h1 className="page-title">Your Book Store</h1>
      <div className="flex-container">
        <SearchBook
          searchBook={searchBook}
          handleSearchChange={handleSearchChange}
        />
        <AddNewBookButton handleAddBookClick={handleAddBookClick} />
      </div>
      {searchBook && <p>Your search results:</p>}
      <div className="p-10 mt-10">
        <BooksList searchBook={searchBook} />
      </div>
      {showForm && (
        <AddBook
          addBookToBooksList={addBookToBooksList}
          newIndex={newIndex}
          selectedIndex={selectedIndex}
          bookList={bookList}
          handleFormClose={handleFormClose}
        />
      )}
    </div>
  );
}

function SearchBook({ searchBook, handleSearchChange }) {
  return (
    <div>
      Search Book :{" "}
      <input type="text" onChange={handleSearchChange} value={searchBook} />
    </div>
  );
}

function AddNewBookButton({ handleAddBookClick }) {
  return (
    <button type="submit" value="Add New Book" onClick={handleAddBookClick}>
      Add New Book
    </button>
  );
}

const mapStateToProps = ({ showForm, lastIndex, selectedIndex, bookList }) => ({
  showForm: showForm,
  newIndex: lastIndex + 1,
  selectedIndex: selectedIndex,
  bookList: bookList
});

const mapDispatchToProps = {
  addBookToBooksList: addBookToBooksList,
  updateShowForm: updateShowForm
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
