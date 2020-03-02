import anecdoteService from '../services/anecdotes'

const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const vote = (anecdote) => {
  return async dispatch => {
    const votedAnecdote = await anecdoteService.addVote(anecdote)
    dispatch({
      type: 'VOTE',
      data: votedAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE':  
      const votedAnecdote = action.data
      return state.map(anecdote =>
        anecdote.id !== votedAnecdote.id ? anecdote : votedAnecdote 
      )
      case 'NEW_ANECDOTE':
        const newAnecdote = action.data
        return state.concat(newAnecdote)
      case 'INIT_ANECDOTES':
        return action.data
    default:
    return state
  }
}

export default anecdoteReducer