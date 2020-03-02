
export const setNotification = (notification, timer) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: notification
    })
    setTimeout(() => {
      dispatch(resetNotification())
    }, timer * 1000)
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