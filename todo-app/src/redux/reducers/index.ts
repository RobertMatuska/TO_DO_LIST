import { combineReducers } from "redux";

const initialState = {
  input: [],
};

const inputReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "NEW_TODO":
      const updatedTodoList = [...state.input, action.payload];
      return { ...state, input: updatedTodoList };
    case "TODO_ITEM_DONE":
      const { id } = action.payload;
      const updatedTodos = state.input.map((todo: any) => {
        if (todo.index === id) {
          return { ...todo, status: "DONE" };
        }
        return todo;
      });
      return {
        ...state,
        input: updatedTodos,
      };
    case "DELETE_TODO":
      const updatedTodo: any[] = [];
      state.input.map((todo: any) => {
        const { id } = action.payload;
        if (todo.index !== id) {
          updatedTodo.push(todo);
          return { updatedTodo };
        }
        return todo;
      });
      return {
        ...state,
        input: updatedTodo,
      };
    case "SORT_TODO_BY_TITLE_ASC":
      const sortedTodosASC: any = state?.input?.sort((a: any, b: any) => {
        if (a.newTitle < b.newTitle) {
          return 1;
        } else {
          return -1;
        }
      });
      return {
        ...state,
        input: sortedTodosASC,
      };
    case "SORT_TODO_BY_TITLE_DESC":
      const sortedTodosDESC: any = state?.input?.sort((a: any, b: any) => {
        if (a.newTitle > b.newTitle) {
          return 1;
        } else {
          return -1;
        }
      });
      return {
        ...state,
        input: sortedTodosDESC,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  input: inputReducer,
});

export default rootReducer;
