// import Vue from 'vue'
// import Router from 'vue-router'
import Login from '@/views/login'
import Register from '@/views/register'
import Dashboard from '@/views/dashboard'
import Candidate from '@/views/candidate'
import Search from '@/views/Search'

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
  },
  {
    path: '/Candidate',
    name: 'Candidate',
    component: Candidate
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search
  }
]

export default routes
