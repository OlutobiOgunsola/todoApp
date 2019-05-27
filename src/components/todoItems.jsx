import React, { Component } from "react";
import "../App.css";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="todoBlock" style={this.getStyle()}>
        <div className="todoTitle">
          <input
            type="checkbox"
            className="check"
            onChange={this.props.handleComplete.bind(this, id)}
          />{" "}
          <h6>{title}</h6>
          <button
            className="btn-close"
            onClick={this.props.handleDelete.bind(this, id)}
          >
            X
          </button>
        </div>
        <div className="aNotes">
          <p>{this.props.todo.aNotes}</p>
        </div>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
