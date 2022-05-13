import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import SeachView from '../views/SeachView.vue'
import AsyncView from '../views/AsyncView.vue'
import PagenationView from '../views/PagenationView.vue'
import TodoList from '../views/TodosList.vue'
import TabsView from '../views/TabsView.vue'
import emiter from '@/utils/emiter'
import store from '@/store'

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    beforeEnter: (to, from, next) => {
      emiter.emit('start:spinner');
      store.dispatch('FETCH_NEWS', to.name)
        .then(() => {
          emiter.emit('end:spinner')
          next();
        })
        .catch(err => console.log(err))
    }
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView,
    beforeEnter:(to, from, next) => {
      emiter.emit('start:spinner')
      store.dispatch('FETCH_ASK', to.name)
        .then(() => {
          emiter.emit('end:spinner')
          next()
        })
        .catch(err => console.log(err))
    }
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView,
    beforeEnter: (to, from, next) => {
      emiter.emit('start:spinner')
      store.dispatch('FETCH_JOBS', to.name)
        .then(() => {
          next()
        })
        .catch(err => console.log(err))
    }
  },
  {
    path: '/seach',
    name: 'seach',
    component: SeachView
  },
  {
    path: '/async',
    name: 'async',
    component: AsyncView
  },
  {
    path: '/pagenation',
    name: 'pagenation',
    component: PagenationView
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: TodoList
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: TabsView
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
