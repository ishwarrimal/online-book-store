import React from "react";
import "./App.css";
import { connect } from "react-redux";
import BooksList from "./components/BooksList";

function App({ showForm, selectedIndex }) {
  return (
    <div className="App">
      <BooksList />
      {showForm && <h1>Show Form {selectedIndex}</h1>}
    </div>
  );
}

const mapStateToProps = ({ showForm, selectedIndex }) => ({
  showForm: showForm,
  selectedIndex: selectedIndex
});

export default connect(mapStateToProps, null)(App);
