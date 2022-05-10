import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
import TodoList from "./TodoList";
import Form from "./Form";
import axios from "axios";

const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
    };
  }

  fetchAllTodos = () => {};

  componentDidMount() {
    //fetch all todos from the server
  }
  //Add button functionality
  //1. setState
  //2. change todos
  //3. make a copy todos
  //4. Add a new todo to the end of our todoList
  addToDo = (name) => {
    const newToDo = {
      name: name,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newToDo],
    });
  };

  //Clear button functionality
  //1. setState
  //2. loop through all todos
  //3. remove all todos that have completed === false /!todo.completed
  //4. save filtered todos to state.
  //5. keep all other todos the same.
  handleClear = (e) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return !todo.completed;
      }),
    });
  };

  //toggle functionality
  //1. setState
  //2. change todos
  //3. find the todo that we clicked on
  //4. flip the value of completed for that todo
  //5. keep all other todos the same
  toggleToDo = (todoId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  render() {
    const { todos } = this.state;
    console.log(todos);
    return (
      <div>
        <h1> To Do List </h1>

        <TodoList key={todos.id} todos={todos} toggleToDo={this.toggleToDo} />
        <Form addToDo={this.addToDo} />

        <button onClick={this.handleClear}> Clear Tasks </button>
      </div>
    );
  }
}
