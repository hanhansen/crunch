import React from 'react'
import Recipe from './Recipe'

import './RecipeList.scss'

const RecipleList = ({ entries }) => {
  return (
    <div className='recipeList'>
      <ul className='recipeList__list'>
        {entries && entries.map(entry => {
          return <Recipe recipe={entry} />
        })}
      </ul>
    </div>
  )
}

export default RecipleList