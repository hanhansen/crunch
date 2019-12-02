import { getAutoCompleteAPI, getSearchAPI } from './data'
import { encode } from 'punycode'

export const searchRecipes = async(data) => {
  const { ID, KEY, URL } = getSearchAPI()
  const healthLabels = data.dietRestrictions.map(diet => `&health=${diet}`).join('')
  const query = `&q=${data.ingredients}&app_id=${ID}&app_key=${KEY}${healthLabels}`
  const str = encodeURI(URL + query)
  const result = await fetch(str)
  const entries = await result.json()
  return entries.hits.map(hit => hit.recipe)
}

export const autocomplete = async(input) => {
  if (!input) return
  const { ID, KEY, URL } = getAutoCompleteAPI()
  const query = `&q=${input}&limit=10&app_id=${ID}&app_key=${KEY}`
  const str = encode(URL + query)
  const result = await fetch(str)
  const results = await result.json()
  console.log(results)
  return results
}