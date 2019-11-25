import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { request } from './utils/axios-config'

class Protected extends React.Component {
  state = {
    fetching: true
  }

  async componentDidMount() {
    try {
      await request.get("/users")
      this.setState({
        auth: true,
        fetching: false
      })
    } catch(err) {
      this.setState({
        auth: false,
        fetching: false
      })
    }
  }

  render() {
    if (this.state.fetching) {
      return null
    } else {
      if (this.state.auth) {
        if (this.props.exact) {
          return <Route exact path={this.props.path} component={this.props.component} />
        } else {
          return <Route path={this.props.path} component={this.props.component} />
        }
      } else {
        return <Redirect to="/register" />
      }
    }
  }
}

export default Protected;