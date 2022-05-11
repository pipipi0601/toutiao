
import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/myLogin.vue'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/Login',
        component: Login
      }, {
        path: '/',
        redirect: '/home'
      }

    ]
  })
