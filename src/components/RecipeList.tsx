import React, { FC } from 'react'
import Recipe from './Recipe'

import './RecipeList.scss'

interface NutrientInfo {
  uri: string
  label: string
  quantity: number
  unit: string
}

export interface Entry {
  uri: string
  label: string
  image: string
  source: string
  url: string
  yield: number
  calories: number
  totalWeight: number
  ingredients: NutrientInfo[]
  totalDaily: NutrientInfo[]
  dietLabels: string[]
  healthLabels: string[]
}

interface RecipeListProps {
  entries: Entry[]
}
const RecipleList: FC<RecipeListProps> = ({ entries }) => {
  return (
    <div className='recipeList'>
      <ul className='recipeList__list'>
        {entries && entries.map((entry: Entry, idx: number) => {
          return <Recipe key={idx} recipe={entry} />
        })}
      </ul>
    </div>
  )
}

export default RecipleList