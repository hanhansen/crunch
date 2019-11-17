import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Logo } from './shared/Logo'

import './Landing.scss'
import SearchPanel from './SearchPanel'

interface LandingStates {
  redirect: boolean
  data: any
}
class Landing extends Component<{}, LandingStates> {
  state = {
    redirect: false,
    data: null
  }
  onRequestSubmit = (value: boolean, data: any) => {
    this.setState({
      redirect: value,
      data
    })
  }

  render() {
    return (
      <div className='landing'>
        {this.state.redirect && <Redirect to={{ pathname: '/main', state: { data: this.state.data }}} />}
        <div className='landing__main'>
          <Logo />
          <div className='landing__subtitle'>
            In a crunch? Find recipes based on the ingredients you already have.
          </div>
          <SearchPanel onRequestSubmit={this.onRequestSubmit} />
        </div>
      </div>
    )
  }
}

export default Landing
