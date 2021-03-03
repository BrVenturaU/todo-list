import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Dashboard from '@/components/Dashboard.vue'
import ShowTask from '@/components/ShowTask.vue'
import EditTask from '@/components/EditTask.vue'
import CreateTask from '@/components/CreateTask.vue'
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
      },
      {
        // http://localhost:8080/#/show/id (numero)
        path: 'show/:id',
        name: 'ShowTask',
        component: ShowTask,
      },
      {
        // http://localhost:8080/#/edit/id (numero)
        path: 'edit/:id',
        name: 'EditTask',
        component: EditTask,
      },
      {
        // http://localhost:8080/#/create
        path: 'create',
        name: 'CreateTask',
        component: CreateTask,
      }
    ],
    meta:{
      middleware:[

      ]
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
    ],
    meta:{
      middleware:[

      ]
    }
  }
  
]

const router = new VueRouter({
  routes
})

export default router
