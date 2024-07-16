export const newToDo = (newTitle: string, newDetail: string, index: any, status: string) => ({
  type: "NEW_TODO",
  payload: { newTitle, newDetail, index, status },
});
