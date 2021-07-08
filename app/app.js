import Vue from 'nativescript-vue'
import App from '@/App.vue'
// NativeScript-Vue-Natigator https://market.nativescript.org/plugins/nativescript-vue-navigator/
import Navigator from 'nativescript-vue-navigator'

// import MultiDrawer from 'nativescript-vue-multi-drawer'
import { routes } from './routes'
// Vue.use(MultiDrawer)
Vue.use(Navigator, { routes })

// import Home from './components/Home' // default
// import RecipeDetail from './components/RecipeDetail' // default

new Vue({
  render: (h) => h(App) // default [render: 'h => h('frame', App),'] changed for Navigator
}).$start()
