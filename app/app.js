import Vue from 'nativescript-vue'
import App from '@/App.vue'
// NativeScript-Vue-Natigator https://market.nativescript.org/plugins/nativescript-vue-navigator/
import Navigator from 'nativescript-vue-navigator'
import {routes} from './routes'
Vue.use(Navigator , { routes })

import Home from './components/Home'
import RecipeDetail from './components/RecipeDetail'

new Vue({
  render: (h) => h(App), // default [render: 'h => h('frame', App),'] changed for Navigator
}).$start()
