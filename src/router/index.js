import Vue from 'vue'
import VueRouter from 'vue-router'
import {auth} from '@/firebase/firebase'
import Home from '@/views/Home.vue'
import Dashboard from '@/components/Dashboard.vue'
import ShowTask from '@/components/ShowTask.vue'
import EditTask from '@/components/EditTask.vue'
import Auth from '@/views/Auth.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        // http://localhost:8080/#/
        path: '',
        name: 'Dashboard',
        component: Dashboard,
        meta:{
          requiresAuth: true
        }
      },
    ],
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children:[
      {
        // http://localhost:8080/#/auth
        path: '',
        name: 'Login',
        component: Login,
      },
      // http://localhost:8080/#/auth/register
      {
        path: 'register',
        name: 'Register',
        component: Register,
      }
    ]
  }
  
]

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  // console.log(requiresAuth)
  // console.log(auth.currentUser)
  if (requiresAuth && !auth.currentUser) {
    next('/auth')
  } else {
    next()
  }
})

export default router
