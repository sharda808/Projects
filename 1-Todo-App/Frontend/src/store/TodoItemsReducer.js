 const TodoItemsReducer = (currentItems, action) => {
  switch(action.type){
    case 'ADD_ITEM':{
      // const todoText = action.payload.todoText;
      // const todoDate = action.payload.todoDate;
      const {id, todoText,todoDate} = action.payload;
      
      return [...currentItems,{id:todoText, todoText, todoDate}]
    }
      case 'DELETE_ITEM':
return currentItems.filter(item => item.id !== action.payload.todoId);
case 'LOAD_ALL_ITEMS':
  return action.payload.allItems
              default:
           return currentItems;

  }
 }
 export default TodoItemsReducer;