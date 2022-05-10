import React from "react";

export default class Todo extends React.Component {
  handleClick = () => {
    // console.log("handle click", this.props.todo.id);
    this.props.toggleToDo(this.props.todo.id);
  };

  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.todo.name}{" "}
        {this.props.todo.completed ? <span>✔️</span> : <span></span>}
      </li>
    );
  }
}
