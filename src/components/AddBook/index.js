import React, { useState } from "react";

const AddBook = ({ addNewBook, newIndex, selectedIndex, bookList }) => {
  let obj = {};
  let index = null;
  if (selectedIndex) {
    index = bookList.findIndex(val => {
      return val.id === selectedIndex;
    });
    obj = bookList[selectedIndex];
  }
  const [bookInfo, setBookInfo] = useState(obj);
  const handleFormChange = e => {
    const key = e.target.name;
    const newBookInfo = bookInfo;
    newBookInfo[key] = e.target.value;
    setBookInfo(newBookInfo);
  };
  const handleFormSubmit = e => {
    const bookDetail = bookInfo;
    bookDetail.id = newIndex;
    addNewBook(bookDetail);
  };

  return (
    <div className="fixed container p-10">
      <h1>{index ? "Add" : "Edit"} your book</h1>
      <div>
        <span>Title:</span>
        <input
          type="text"
          name="title"
          value={bookInfo.title}
          onChange={handleFormChange}
        />
        <span>Description:</span>
        <input
          type="text"
          name="description"
          value={bookInfo.description}
          onChange={handleFormChange}
        />
        <span>Price:</span>
        <input
          type="text"
          name="price"
          value={bookInfo.price}
          onChange={handleFormChange}
        />
        <span>Author:</span>
        <input
          type="text"
          name="author"
          value={bookInfo.author}
          onChange={handleFormChange}
        />
        <button type="submit" onClick={handleFormSubmit} value="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddBook;
