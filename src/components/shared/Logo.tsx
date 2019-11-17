import React from 'react'
import './Logo.scss'
export function Logo() {
  return (
    <div className='logo'>
      <img
        className='logo__img'
        src={require('../../icons/logo.png')}
        alt='logo'
      />
      Crunch.
    </div>
  )
}
