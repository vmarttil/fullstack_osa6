let timer = null

export const setNotification = (notification, time) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: notification
    })
    if (timer != null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      dispatch(resetNotification())
    }, time * 1000)
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