import { useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import { editTodo } from "../redux/actions/actions";

function EditToDo() {
  const dispatch = useDispatch();
  const params = useParams();
  const todo = useSelector((state: any) =>
    state?.input?.input.find(
      (todo: any) => todo.index.toString() === params.todoId
    )
  );

  const [title, setTitle] = useState(todo?.title || "");
  const [detail, setDetail] = useState(todo?.detail || "");

  const handleSubmit = () => {
    dispatch(editTodo(todo.index, title, detail, "NEW"));
  };

  return (
    <div className="App">
      <header className="App-header main-layout">
        <p className="vertical-align">
          <Header />
        </p>
        <Link to={`/`}>
          <button className="button">GO HOME</button>{" "}
        </Link>
        <br />
        <input
          className="input-button"
          name="myInput"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br /> <br />
        <textarea
          className="textarea"
          name="postContent"
          rows={4}
          cols={30}
          placeholder="Detail"
          value={detail}
          onChange={(event) => setDetail(event.target.value)}
        />
        <p>
          <button className="button" type="submit">
            <Link to={`/`}>
              <button onClick={handleSubmit} className="button">
                SAVE
              </button>
            </Link>
          </button>
        </p>
      </header>
    </div>
  );
}

export default EditToDo;
