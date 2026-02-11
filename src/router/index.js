import { createRouter, createWebHistory } from 'vue-router'
import ResearchList from '../views/ResearchList.vue'
import ResearchDetail from '../views/ResearchDetail.vue'

const routes = [
  {
    path: '/',
    name: 'ResearchList',
    component: ResearchList
  },
  {
    path: '/detail/:id',
    name: 'ResearchDetail',
    component: ResearchDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
