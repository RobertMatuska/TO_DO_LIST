import { combineReducers } from "redux";

const initialState = {
  input: [],
};

const inputReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "NEW_TODO":
      const updatedTodoList = [...state.input, action.payload];
      return { ...state, updatedTodoList };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  input: inputReducer,
});

export default rootReducer;
