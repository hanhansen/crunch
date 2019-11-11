import React from 'react'
import Recipe from './Recipe'

import './RecipeList.scss'

const RecipleList = ({ entries }) => {
  return (
    <div className='recipeList'>
      <ul className='recipeList__list'>
        {entries && entries.map((entry, idx) => {
          return <Recipe key={idx} recipe={entry} />
        })}
      </ul>
    </div>
  )
}

export default RecipleList