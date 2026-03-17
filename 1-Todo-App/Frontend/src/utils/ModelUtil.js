export const todoItemClientModel = (serverItem) => {
return {
  id:serverItem.id,
  todoText:serverItem.task,
  todoDate:serverItem.date
}
}