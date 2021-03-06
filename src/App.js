import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from 'pages/main'
import Favorite from 'pages/favorite'

export default function App() {
  return (
    <Router basename="/pokedex">
      <Switch>
        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}
