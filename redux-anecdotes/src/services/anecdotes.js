import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0
  }
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {  
  const newAnecdote = asObject(content)
  const response = await axios.post(baseUrl, newAnecdote)
  return response.data
}

export default { getAll, createNew }