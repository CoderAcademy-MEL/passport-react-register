import React from 'react'
import { request } from './utils/axios-config'
import { withRouter } from 'react-router-dom'

const onRegisterSubmit = async (e, history) => {
  e.preventDefault()
  const [username, password] = e.target.elements
  try {
    await request.post("/users/register", {username: username.value, password: password.value})
    history.push("/")
  } catch(err) {
    console.log(err)
  }
}

const Register = (props) => {
  return (
    <>
      <h1>Register for the app!</h1>
      <form onSubmit={(e) => onRegisterSubmit(e, props.history)}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username"/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"/>
        <input type="submit" value="Submit"/>
      </form>
    </>
  ) 
}

export default withRouter(Register)