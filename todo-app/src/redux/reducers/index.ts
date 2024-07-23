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
      let sortedTodosASC: any = [];
      action?.payload.filteredToDo.length > 0
        ? (sortedTodosASC = action?.payload.filteredToDo?.sort(
            (a: any, b: any) => {
              if (a.newTitle > b.newTitle) {
                return 1;
              } else {
                return -1;
              }
            }
          ))
        : (sortedTodosASC = action?.payload.allTodo?.sort((a: any, b: any) => {
            if (a.newTitle > b.newTitle) {
              return 1;
            } else {
              return -1;
            }
          }));
      return {
        ...state,
        sorted: sortedTodosASC,
      };

    case "SORT_TODO_BY_TITLE_DESC":
      let sortedTodosDESC: any = [];
      action?.payload.filteredToDo.length > 0
        ? (sortedTodosDESC = action?.payload.filteredToDo?.sort(
            (a: any, b: any) => {
              if (a.newTitle < b.newTitle) {
                return 1;
              } else {
                return -1;
              }
            }
          ))
        : (sortedTodosDESC = action?.payload.allTodo?.sort((a: any, b: any) => {
            if (a.newTitle < b.newTitle) {
              return 1;
            } else {
              return -1;
            }
          }));
      return {
        ...state,
        sorted: sortedTodosDESC,
      };

    case "SEARCH_TODO":
      const searchedString = action?.payload?.searchedString;
      const searchedToDo = state?.input?.filter((item: any) =>
        item.newTitle
          .toLowerCase()
          .includes(action.payload.searchedString.toLowerCase())
      );

      return {
        ...state,
        searchedToDo: searchedString.length > 0 ? searchedToDo : [],
        searchedString: searchedString,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  input: inputReducer,
});

export default rootReducer;
