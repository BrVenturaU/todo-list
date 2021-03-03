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
        path: '',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'show/:id',
        name: 'ShowTask',
        component: ShowTask,
      },
      {
        path: 'edit/:id',
        name: 'EditTask',
        component: EditTask,
      },
      {
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
        path: '',
        name: 'Login',
        component: Login,
      },
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
