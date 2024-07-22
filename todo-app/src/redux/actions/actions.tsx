export const newToDo = (
  newTitle: string,
  newDetail: string,
  index: number,
  status: string
) => ({
  type: "NEW_TODO",
  payload: { newTitle, newDetail, index, status },
});

export const markToDoAsDone = (id: number) => ({
  type: "TODO_ITEM_DONE",
  payload: { id },
});

export const deleteToDo = (id: number) => ({
  type: "DELETE_TODO",
  payload: { id },
});

export const sortTodosByTitleAscending = () => ({
  type: "SORT_TODO_BY_TITLE_ASC",
});

export const sortTodosByTitleDescending = () => ({
  type: "SORT_TODO_BY_TITLE_DESC",
});
