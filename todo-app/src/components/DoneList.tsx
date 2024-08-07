import { useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteToDo,
  sortTodosByTitleAscending,
  sortTodosByTitleDescending,
} from "../redux/actions/actions";
import { Link } from "react-router-dom";

function DoneList() {
  const dispatch = useDispatch();
  const allTodo = useSelector((state: any) => state.input.input);
  const filteredToDo = useSelector((state: any) => state.input.searchedToDo);
  const searchString = useSelector((state: any) => state.input.searchedString);
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
      {!searchString && filteredToDo?.length === 0
        ? allTodo.map((todoDone: any) => (
            <p key={todoDone.index}>
              {todoDone.status === "DONE" ? (
                <p
                  style={{
                    border: "gray solid 2px",
                    marginLeft: "20px",
                    minHeight: "120px",
                    maxWidth: "290px",
                    backgroundColor: "#6ADD70",
                  }}
                >
                  <p style={{ margin: "0px", fontWeight: "bold" }}>
                    {todoDone.title}
                  </p>
                  <p style={{ fontSize: "18px", margin: "0px" }}>
                    {todoDone.detail}
                  </p>

                  <p style={{ margin: "0px" }}>
                    <Link to={`/edit/${todoDone.index}`}>
                      <button className="button">Edit</button>
                    </Link>

                    <button
                      style={{ marginLeft: "20px" }}
                      onClick={() => onDeleteTodo(todoDone.index)}
                      className="button"
                    >
                      Delete
                    </button>
                  </p>
                </p>
              ) : (
                <p></p>
              )}
            </p>
          ))
        : filteredToDo?.map((todoDone: any) => (
            <p key={todoDone.index}>
              {todoDone.status === "DONE" ? (
                <p
                  style={{
                    border: "gray solid 2px",
                    marginLeft: "20px",
                    minHeight: "120px",
                    maxWidth: "290px",
                    backgroundColor: "#6ADD70",
                  }}
                >
                  <p style={{ margin: "0px", fontWeight: "bold" }}>
                    {todoDone.title}
                  </p>
                  <p style={{ fontSize: "18px", margin: "0px" }}>
                    {todoDone.detail}
                  </p>

                  <p style={{ margin: "0px" }}>
                    <Link to={`/edit/${todoDone.index}`}>
                      <button className="button">Edit</button>
                    </Link>

                    <button
                      style={{ marginLeft: "20px" }}
                      onClick={() => onDeleteTodo(todoDone.index)}
                      className="button"
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
