import React from 'react'
import AnecdoteForm from './components/anecdoteForm'
import AnecdoteList from './components/anecdoteList'

const App = () => {
  return (
    <div>
      <h1>Anecdotes</h1>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App