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
