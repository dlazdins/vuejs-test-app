import { createRouter, createWebHistory } from 'vue-router'

import AddSongsPage from '../views/AddSongsPage'
import SongsListPage from '../views/SongsListPage'

const routes = [
  {
    path: '/',
    name: 'List songs',
    component: SongsListPage
  },
  {
    path: '/add',
    name: 'Add songs',
    component: AddSongsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
