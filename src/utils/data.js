const ID = "f930555b"
const KEY = "e6405caeab4f85d55ff85a731f63108f"

const SEARCH_API = {
  ID,
  KEY,
  URL : "https://api.edamam.com/search?"
}

const AUTO_COMPLETE_API = {
  ID,
  KEY,
  URL: 'http://api.edamam.com/auto-complete?'
}

export const getSearchAPI = () => SEARCH_API
export const getAutoCompleteAPI = () => AUTO_COMPLETE_API