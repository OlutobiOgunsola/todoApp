import React, { Component } from "react";
// @ts-ignore
// import { Navbar, NavbarBrand } from "reactstrap";
// import "./App.css";
// import Menu from "./components/menuComponent";
// import { DISHES } from "./shared/dishes";
import Todos from "./todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out trash",
        isANotes: true,
        completed: false,
        aNotes: "Take out all the trash in the house"
      },
      {
        id: 2,
        title: "Buy a cat",
        isANotes: false,
        completed: false
      },
      {
        id: 3,
        title: "Read a Book",
        isANotes: false,
        completed: false,
        aNotes: "Read all the books in this house"
      }
    ]
  };
  render() {
    return (
      <div>
        <Todos />
      </div>
    );
  }
}

export default App;
