export const newToDo = (
  title: string,
  detail: string,
  index: number,
  status: string
) => ({
  type: "NEW_TODO",
  payload: { title, detail, index, status },
});

export const markToDoAsDone = (id: number) => ({
  type: "TODO_ITEM_DONE",
  payload: { id },
});

export const deleteToDo = (id: number) => ({
  type: "DELETE_TODO",
  payload: { id },
});

export const sortTodosByTitleAscending = (allTodo: any, filteredToDo: any) => ({
  type: "SORT_TODO_BY_TITLE_ASC",
  payload: {
    allTodo,
    filteredToDo,
  },
});

export const sortTodosByTitleDescending = (
  allTodo: any,
  filteredToDo: any
) => ({
  type: "SORT_TODO_BY_TITLE_DESC",
  payload: {
    allTodo,
    filteredToDo,
  },
});

export const searchedToDo = (searchedString: string) => ({
  type: "SEARCH_TODO",
  payload: { searchedString },
});

export const editTodo = (
  index: any,
  title: string,
  detail: string,
  status: string
) => ({
  type: "EDIT_TODO",
  payload: { title, detail, index, status },
});
