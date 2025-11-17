import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChapterView from '../views/ChapterView.vue'
import EndingScreenView from '../views/EndingScreenView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/ChapterView/:id',
    name: 'ChapterView',
    component: ChapterView
  },
  {
    path: '/EndingScreenView/:id',
    name: 'EndingScreenView',
    component: EndingScreenView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
