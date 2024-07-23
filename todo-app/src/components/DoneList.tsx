import React, { useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteToDo,
  sortTodosByTitleAscending,
  sortTodosByTitleDescending,
} from "../redux/actions/actions";

function DoneList() {
  const dispatch = useDispatch();
  const allTodo = useSelector((state: any) => state.input.input);
  const filteredToDo = useSelector((state: any) => state.input.searchedToDo);
  const [sorted, setSorted] = useState(false);

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

  return (
    <div className="App">
      <h2 style={{ margin: "0px" }}>Done list</h2>
      <button className="button" onClick={handleSort}>
        {sorted ? "Sort ASC" : "Sort DESC"}
      </button>
      {allTodo.map((todoDone: any) => (
        <p key={todoDone.index}>
          {todoDone.status === "DONE" ? (
            <p
              style={{
                border: "gray solid 2px",
                marginLeft: "20px",
                minHeight: "120px",
                maxWidth: "260px",
              }}
            >
              <p style={{ margin: "0px", fontWeight: "bold" }}>
                {todoDone.newTitle}
              </p>
              <p style={{ fontSize: "18px", margin: "0px" }}>
                {todoDone.newDetail}
              </p>

              <p style={{ margin: "0px" }}>
                <button>Edit</button>
                <button
                  style={{ marginLeft: "20px" }}
                  onClick={() => onDeleteTodo(todoDone.index)}
                >
                  Delete
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
export default DoneList;
