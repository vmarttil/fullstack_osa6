
const notificationReducer = (state = 'This notification will be shown initially', action) => {
  switch(action.type) {
    case 'SET_NOTIFICATION':  
      return action.data
    case 'RESET_NOTIFICATION':
      return ''
    default:
    return state
  }
}

export default notificationReducer