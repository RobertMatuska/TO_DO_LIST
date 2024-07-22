import React, { useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { newToDo } from "../redux/actions/actions";

function Buttons() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const setNewTodo = () => {
    const timestampLikeId = Date.now();
    dispatch(newToDo(title, detail, timestampLikeId, "NEW"));
    setTitle("");
    setDetail("");
  };

  return (
    <div className="App">
      <p style={{ width: "350px" }}>
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
        <button className="save-button" onClick={() => setNewTodo()}>
          SAVE
        </button>
      </p>
    </div>
  );
}

export default Buttons;
