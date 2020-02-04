import React from "react";

const BookDetails = ({ id, title, description, price, author, handleEdit }) => {
  const handleClick = () => {
    handleEdit(id);
  };
  return (
    <div className="dashed-border-2 p-10 m-10">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{author}</p>
      <p>Price: ${price}</p>
      <button onClick={handleClick}>Edit</button>
    </div>
  );
};

export default BookDetails;
