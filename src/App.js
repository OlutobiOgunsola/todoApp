import React, { Component } from "react";
// @ts-ignore
// import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
// import Menu from "./components/menuComponent";
// import { DISHES } from "./shared/dishes";
import Todos from "./components/todos";
import AddTodo from "./components/addTodo";
import Header from "./components/header";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out trash",
        isANotes: true,
        completed: false,
        aNotes: "Take out all the trash"
      },
      {
        id: 2,
        title: "Buy a cat",
        isANotes: false,
        completed: false,
        aNotes: "A lovely vietnamese cat"
      },
      {
        id: 3,
        title: "Read a Book",
        isANotes: false,
        completed: false,
        aNotes: "Business Adventures by John Brooks"
      }
    ]
  };
  handleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  handleDelete = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: todos });
  };
  render() {
    return (
      <div class="container">
        <Header />
        <AddTodo />
        <Todos
          todos={this.state.todos}
          handleComplete={this.handleComplete}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
