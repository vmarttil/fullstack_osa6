import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setVoteNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {  
  const filterText = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes.filter((anecdote) => anecdote.content.includes(filterText)).sort((a,b) => b.votes - a.votes))
  const dispatch = useDispatch()

  const voteButtonHandler = (anecdote) => {
    dispatch(vote(anecdote))
    dispatch(setVoteNotification(anecdote.content))
    setTimeout(() => {
      dispatch(resetNotification())
    }, 5000)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteButtonHandler(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList