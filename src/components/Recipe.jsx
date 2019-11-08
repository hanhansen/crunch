import React from 'react'
import './Recipe.scss'

const Recipe = ({ recipe }) => {
  return (
    <li className='recipe'>
      <div className='recipe__container'>
        {/* {recipe.label} */}
        <img src={recipe.image} alt='recipe' />
      </div>
    </li>
  )
}

export default Recipe