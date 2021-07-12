// NativeScript-Vue-Navigator用

import Home from './components/Home'
import RecipeDetail from './components/RecipeDetail'
import RecipeEdit from './components/RecipeEdit'

export const routes = {
  '/home': {
    component: Home,
  },
  '/recipedetail': {
    component: RecipeDetail,
  },
  '/recipeedit': {
    component: RecipeEdit,
  },
}
