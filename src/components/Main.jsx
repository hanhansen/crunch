import React from 'react'
import Header from './Header'
import RecipeList from './RecipeList'

import './Main.scss'

const Main = (props) => {
  const { location } = props
  if (!location || !location.state || !location.state.data) {
    return <div>No results found.</div>
  }

  const entries = location.state.data
  return (
    <div className='main'>
      <Header />
      <RecipeList entries={entries} />
    </div>
  )
}

export default Main
