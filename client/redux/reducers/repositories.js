const UPDATE_USER_NAME = 'UPDATE_USER_NAME'

const initialState = {
  username: 'nogaasha'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return {
        ...state,
        username: action.username
      }
    default:
      return state
  }
}

export function updateUsername(username) {
  return { type: UPDATE_USER_NAME, username }
}
