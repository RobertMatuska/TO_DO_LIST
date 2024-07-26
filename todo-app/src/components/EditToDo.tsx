import React, { useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Buttons from "./InputToDo";

function EditToDo() {
  const dispatch = useDispatch();
  const params = useParams();
  console.log("params", params.todoId);
  const todos = useSelector((state: any) => state?.input);
  console.log("todos", todos);
  const todo = useSelector((state: any) =>
    state?.input?.input.find(
      (todo: any) => todo.index.toString() === params.todoId
    )
  );

  const [title, setTitle] = useState(todo?.title || "");
  const [detail, setDetail] = useState(todo?.description || "");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const updatedTodo = {
      id: 1,
      title,
      detail,
    };

    //dispatch(updateTodo(updatedTodo));
    //history.push('/'); // Presmerovanie na zoznam Todo položiek
  };

  return (
    <div className="App">
      <header className="App-header main-layout">
        <p className="vertical-align">
          <Header />
        </p>
        <Link to={`/`}><button className="button" >GO HOME</button> </Link>
        <form onSubmit={handleSubmit}>
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
              SAVE
            </button>
          </p>
        </form>
      </header>
    </div>
  );
}

export default EditToDo;
