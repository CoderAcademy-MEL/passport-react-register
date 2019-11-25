import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Register from './Register'
import Protected from './Protected'
import Dashboard from './Dashboard'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Protected exact path="/" component={Dashboard} />
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    )
  }
}

export default App