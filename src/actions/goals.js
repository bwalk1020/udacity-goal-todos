import API from 'goals-todos-api'
export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'


export function addGoal (goal) {
  return {
    type: ADD_GOAL,
    goal
  }
}

export function removeGoal (id) {
  return {
    type: REMOVE_GOAL,
    id
  }
}

export function handleAddGoal (name, cb) {
  return (dispatch) => {
    return API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoal(goal))
        cb();
      })
      .catch(() => alert('There was an error, try again'));
  }
}

export function handleDeleteGoal (goal) {
  return (dispatch) => {
    return API.deleteGoal(goal.id)
      .catch(() => {
        dispatch(addGoal(goal));
        alert('There was an error, try again');
      });
  }
}