import Vue from 'vue'
import Router from 'vue-router'
import Api from './views/Api.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'api',
      component: Api
    },
    
  ]
})
