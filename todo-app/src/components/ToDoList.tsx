import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteToDo,
  markToDoAsDone,
  sortTodosByTitleAscending,
  sortTodosByTitleDescending,
} from "../redux/actions/actions";

function ToDoList() {
  const dispatch = useDispatch();
  const allTodo = useSelector((state: any) => state.input.input);
  const filteredToDo = useSelector((state: any) => state.input.searchedToDo);

  const [sorted, setSorted] = useState(false);

  const onChangeStateToDone = (id: any) => {
    dispatch(markToDoAsDone(id));
  };

  const onDeleteTodo = (id: any) => {
    dispatch(deleteToDo(id));
  };

  const handleSort = () => {
    if (sorted) {
      setSorted(false);
      dispatch(sortTodosByTitleAscending(allTodo, filteredToDo));
    } else {
      setSorted(true);
      dispatch(sortTodosByTitleDescending(allTodo, filteredToDo));
    }
  };
  console.log("filteredToDo", allTodo);
  return (
    <div className="App">
      <h2 style={{ margin: "0px" }}>To Do list</h2>
      <button className="button" onClick={handleSort}>
        {sorted ? "Sort ASC" : "Sort DESC"}
      </button>
      {filteredToDo?.length === 0
        ? allTodo?.map((todo: any) => (
            <p key={todo.index}>
              {todo.status === "NEW" ? (
                <p
                  style={{
                    border: "gray solid 2px",
                    marginLeft: "20px",
                    minHeight: "120px",
                    maxWidth: "260px",
                  }}
                  id={todo.index}
                >
                  <p style={{ margin: "0px", fontWeight: "bold" }}>
                    {todo.newTitle}
                  </p>
                  <p style={{ fontSize: "18px", margin: "0px" }}>
                    {todo.newDetail}
                  </p>
                  <p style={{ margin: "0px" }}>
                    <button>Edit</button>
                    <button
                      style={{ marginLeft: "20px" }}
                      onClick={() => onDeleteTodo(todo.index)}
                    >
                      Delete
                    </button>
                    <button
                      id={todo.index}
                      style={{ marginLeft: "20px" }}
                      onClick={() => onChangeStateToDone(todo.index)}
                    >
                      Done
                    </button>
                  </p>
                </p>
              ) : (
                <p></p>
              )}
            </p>
          ))
        : filteredToDo?.map((todo: any) => (
            <p key={todo.index}>
              {todo.status === "NEW" ? (
                <p
                  style={{
                    border: "gray solid 2px",
                    marginLeft: "20px",
                    minHeight: "120px",
                    maxWidth: "260px",
                  }}
                  id={todo.index}
                >
                  <p style={{ margin: "0px", fontWeight: "bold" }}>
                    {todo.newTitle}
                  </p>
                  <p style={{ fontSize: "18px", margin: "0px" }}>
                    {todo.newDetail}
                  </p>
                  <p style={{ margin: "0px" }}>
                    <button>Edit</button>
                    <button
                      style={{ marginLeft: "20px" }}
                      onClick={() => onDeleteTodo(todo.index)}
                    >
                      Delete
                    </button>
                    <button
                      id={todo.index}
                      style={{ marginLeft: "20px" }}
                      onClick={() => onChangeStateToDone(todo.index)}
                    >
                      Done
                    </button>
                  </p>
                </p>
              ) : (
                <p></p>
              )}
            </p>
          ))}
    </div>
  );
}

export default ToDoList;
