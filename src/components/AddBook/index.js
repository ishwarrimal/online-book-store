import React, { useState, useEffect } from "react";

const AddBook = ({
  addBookToBooksList,
  newIndex,
  selectedIndex,
  bookList,
  handleFormClose
}) => {
  const [index, setIndex] = useState(null);
  const [bookInfo, setBookInfo] = useState({});
  useEffect(() => {
    let obj = {};
    let id = null;
    if (selectedIndex) {
      id = bookList.findIndex(val => {
        return val.id === selectedIndex;
      });
      obj = bookList[id];
    }
    setIndex(id);
    setBookInfo(obj);
  }, []);
  const handleFormChange = e => {
    const key = e.target.name;
    const newBookInfo = bookInfo;
    newBookInfo[key] = e.target.value;
    setBookInfo({ ...newBookInfo });
  };
  const handleFormSubmit = () => {
    const bookDetail = bookInfo;
    bookDetail.id = newIndex;
    addBookToBooksList(bookDetail, index);
  };
  return (
    <div className="fixed container p-10 addBookForm">
      <h1>Your book details</h1>
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
        <div className="mt-10">
          <button type="submit" onClick={handleFormSubmit}>
            Submit
          </button>
          <button type="submit" onClick={handleFormClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
