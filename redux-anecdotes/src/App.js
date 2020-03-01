import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/anecdoteForm'

const App = () => {
  const anecdotes = useSelector(state => state.sort((a,b) => b.votes - a.votes))
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Anecdotes</h1>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
      
      <AnecdoteForm />
    </div>
  )
}

export default App