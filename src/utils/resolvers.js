import { getSearchAPI } from './data'

export const searchRecipes = async(data) => {
  const { ID, KEY, URL } = getSearchAPI()
  const healthLabels = data.dietRestrictions.map(diet => `&health=${diet}`).join('')
  const query = `&q=${data.ingredients}&app_id=${ID}&app_key=${KEY}${healthLabels}`
  const str = encodeURI(URL + query);
  const result = await fetch(str)
  const entries = await result.json()
  return entries.hits.map(hit => hit.recipe)
}
