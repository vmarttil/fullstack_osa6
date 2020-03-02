
export const setAddNotification = content => {  
  const notification = `You added the anecdote '${content}'`
  return {
    type: 'SET_NOTIFICATION',
    data: notification,
  }
}

export const setVoteNotification = content => {
  const notification = `You voted '${content}'`
  return {
    type: 'SET_NOTIFICATION',
    data: notification,
  }
}

export const resetNotification = () => {
  return {
    type: 'RESET_NOTIFICATION'
  }
}

const notificationReducer = (state = '', action) => {
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