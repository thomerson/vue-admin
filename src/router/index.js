// import Vue from 'vue'
// import Router from 'vue-router'
import Login from '@/views/login'
import Register from '@/views/register'

// Vue.use(Router)
const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    redirect: '/Login'
  }]

export default routes
