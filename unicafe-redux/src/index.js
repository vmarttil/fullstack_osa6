import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

const StatisticLine = (props) => {
    return (
    <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
    </tr>
    )
}

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const average = (good + (bad * -1)) / all
    const positive = good / all * 100

    if (all === 0) {
        return (<p>Ei palautteita</p>)
    } else {
        return (
            <table>
                <tbody>
                    <StatisticLine text='hyvä' value={good} />
                    <StatisticLine text='neutraali' value={neutral} />
                    <StatisticLine text='huono' value={bad} />
                    <StatisticLine text='kaikki' value={all} />
                    <StatisticLine text='keskiarvo' value={average} />
                    <StatisticLine text='hyviä' value={positive + ' %'} />
                </tbody>
            </table>
        )
    }
}

  return (
    <div>
      <h1>Anna palautetta</h1>
      <button onClick={good}>hyvä</button> 
      <button onClick={ok}>neutraali</button>
      <button onClick={bad}>huono</button>
      <button onClick={zero}>nollaa tilastot</button>
      <h1>Tulokset</h1>
      <Statistics good={store.getState().good} neutral={store.getState().ok} bad={store.getState().bad} />   
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)