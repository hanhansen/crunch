import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Logo } from './shared/Logo'

import './Landing.scss'
import SearchPanel from './SearchPanel'

interface LandingStates {
  redirect: boolean
}
class Landing extends Component<{}, LandingStates> {
  state = {
    redirect: false
  }
  onRedirectChange = (value: boolean) => {
    this.setState({
      redirect: value
    })
  }

  render() {
    return (
      <div className='landing'>
        {this.state.redirect && <Redirect to='/main' />}
        <div className='landing__main'>
          <Logo />
          <div className='landing__subtitle'>
            In a crunch? Find recipes based on the ingredients you already have.
          </div>
          <SearchPanel onRedirectChange={this.onRedirectChange} />
        </div>
      </div>
    )
  }
}

export default Landing
