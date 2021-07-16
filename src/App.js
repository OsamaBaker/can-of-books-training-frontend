import React, { Component } from 'react'
import Profile from './components/Profile'
import LoginButton from './components/LoginButton'
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './components/LogoutButton'


export class App extends Component {
  render() {
    return (
      <div>
        {this.props.auth0.isAuthenticated ? <><Profile/><LogoutButton/></> : <LoginButton/>}
      </div>
    )
  }
}

export default withAuth0(App);
