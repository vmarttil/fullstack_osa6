import React from 'react'
import AnecdoteForm from './components/anecdoteForm'
import AnecdoteList from './components/anecdoteList'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <h1>Anecdotes</h1>
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App