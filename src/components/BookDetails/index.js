import React from "react";

const BookDetails = ({ id, name, description, price, author, handleEdit }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{author}</p>
      <p>Price: ${price}</p>
      {/* <button onClick={handleEdit(id)}>Edit</button> */}
    </div>
  );
};

export default BookDetails;
