import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import SeachView from '../views/SeachView.vue'

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/seach',
    name: 'seach',
    component: SeachView
  },
  {
    path: '/item/:id',
    name: 'item',
    component: ItemView
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserView
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
