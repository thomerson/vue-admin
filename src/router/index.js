// import Vue from 'vue'
// import Router from 'vue-router'
import Login from '@/views/login'
import Register from '@/views/register'
import Dashboard from '@/views/dashboard'

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
  },
  {
    path: '/Index',
    name: 'Dashboard',
    component: Dashboard
  }
]

export default routes
