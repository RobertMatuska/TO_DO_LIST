import React from "react";
import "../App.css";
import { useSelector } from "react-redux";

function DoneList() {
  const allTodo = useSelector((state: any) => state.input.input);

  return (
    <div className="App">
      <h2 style={{ margin: "0px" }}>Done list</h2>
      <p
        style={{
          border: "gray solid 2px",
          marginLeft: "20px",
          maxHeight: "150px",
        }}
      >
        <p>
          <p style={{ margin: "0px" }}>Title</p>
          <p style={{ fontSize: "18px", margin: "0px" }}>Detail</p>
        </p>

        <p style={{ margin: "0px" }}>
          <button>Edit</button>
          <button style={{ marginLeft: "20px" }}>Delete</button>
        </p>
      </p>
    </div>
  );
}

export default DoneList;
