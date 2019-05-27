import React, { Component } from "react";
import TodoItem from "./todoItems";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleComplete={this.props.handleComplete}
        handleDelete={this.props.handleDelete}
      />
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};
export default Todos;
