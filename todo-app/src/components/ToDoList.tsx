import React from "react";
import "../App.css";
import { useSelector } from "react-redux";

function ToDoList() {
  const allTodo = useSelector((state: any) => state.input.input);

  return (
    <div className="App">
      <h2 style={{ margin: "0px" }}>To Do list</h2>

      {allTodo.map((todo: any) => (
        <p
          style={{
            border: "gray solid 2px",
            marginLeft: "20px",
            maxHeight: "150px",
          }}
        >
          <p style={{ margin: "0px", fontWeight: "bold" }}>{todo.newTitle}</p>
          <p style={{ fontSize: "18px", margin: "0px" }}>{todo.newDetail}</p>
          <p>
            <button>Edit</button>
            <button style={{ marginLeft: "20px" }}>Delete</button>
            <button style={{ marginLeft: "20px" }}>Done</button>
          </p>
        </p>
      ))}
    </div>
  );
}

export default ToDoList;
