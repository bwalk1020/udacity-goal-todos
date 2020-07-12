import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


export function addTodo(todo){
  return {
    type: ADD_TODO,
    todo
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function handleDeleteTodo (todo) {
  return (dispatch) => {
   dispatch(removeTodo(todo.id));
   return API.deleteTodo(todo.id).catch(() => {
         dispatch(addTodo(todo));
         alert('an error occured, try again.');
       });
  }
 }

 export function handleAddTodo (name, cb) {
   return (dispatch) => {
     return API.saveTodo(name)
       .then((todo) => {
         dispatch(addTodo(todo));
         cb();
       })
       .catch(() => {
         alert('There was an error, try again');
       }); 
   }
 }

 export function handleToggleTodo (id) {
  return (dispatch) => {
    dispatch(toggleTodo(id));
    return API.saveTodoToggle(id).catch(() => {
        dispatch(toggleTodo(id));
      });
  }
}