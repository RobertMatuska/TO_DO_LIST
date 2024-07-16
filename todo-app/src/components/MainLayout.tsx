import Flex from "@react-css/flex";
import Header from "./Header";
import Buttons from "./InputToDo";
import ToDoList from "./ToDoList";
import DoneList from "./DoneList";

function MainLayout() {
  return (
    <div className="App">
      <header className="App-header main-layout">
        <p className="vertical-align">
          <Header />
        </p>
        <Buttons />
        <Flex>
          <p style={{ minWidth: "300px" }}>
            <ToDoList />
          </p>
          <p style={{ minWidth: "300px" }}>
            <DoneList />
          </p>
        </Flex>
      </header>
    </div>
  );
}

export default MainLayout;
