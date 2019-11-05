import React from 'react'
import { Logo } from './shared/Logo'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__left'></div>
      <div className='header__middle'>
        <Logo />
      </div>
    </header>
  )
}

export default Header
