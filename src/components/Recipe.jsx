import React from 'react'
import './Recipe.scss'
const Recipe = ({ recipe }) => {
  return (
    <li className='recipe'>
      <div className='recipe__container'>
        <img className='recipe__image' src={recipe.image} alt='recipe' />
        <div className='recipe__header'>
          <div className='recipe__src'>{recipe.source}</div>
          <a className='recipe__title' target='_blank' href={recipe.url}>
            <div>{recipe.label}</div>
          </a>
        </div>
      </div>
    </li>
  )
}

export default Recipe