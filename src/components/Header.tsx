import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from './shared/Logo'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__left'></div>
      <div className='header__middle'>
        <NavLink className='header__homeLink' to='/'>
          <Logo />
        </NavLink>
      </div>
    </header>
  )
}

export default Header
