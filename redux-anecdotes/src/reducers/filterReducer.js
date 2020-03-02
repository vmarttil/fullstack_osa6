
export const setFilter = filterText => {  
  return {
    type: 'SET_FILTER',
    data: filterText
  }
}

const filterReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_FILTER':  
      return action.data
    default:
    return state
  }
}

export default filterReducer