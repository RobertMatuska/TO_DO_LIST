import { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { newToDo, searchedToDo } from "../redux/actions/actions";

function InputToDo() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [searchedString, setSearchedString] = useState("");
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    dispatch(searchedToDo(searchedString));
  }, [searchedString]);

  const setNewTodo = () => {
    const timestampLikeId = Date.now();
    title === "" ? setValidation(true) : setValidation(false);
    title && dispatch(newToDo(title, detail, timestampLikeId, "NEW"));
    setTitle("");
    setDetail("");
  };

  return (
    <div className="App">
      <p style={{ width: "350px" }}>
        <label style={{ color: "red", margin: "0px" }}>
          {validation === true ? "Please fill title!" : ""}
        </label>
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
        <button className="button" onClick={() => setNewTodo()}>
          SAVE
        </button>
        <br />
      </p>
      <input
        className="search-input"
        onChange={(event) => setSearchedString(event.target.value)}
        placeholder="SEARCH"
      ></input>
    </div>
  );
}

export default InputToDo;
