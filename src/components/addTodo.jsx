import React, { Component } from "react";
class AddTodo extends Component {
  render() {
    return (
      <form className="add-todo">
        <input
          type="text"
          className="Addtodo-title"
          placeholder="Add to list"
        />
        <input
          type="text"
          className="Addtodo-aNote"
          placeholder="Add extra notes..."
        />
        <input type="Submit" className="btn-input" />
      </form>
    );
  }
}

export default AddTodo;
