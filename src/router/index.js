import { createRouter, createWebHistory } from 'vue-router';
import DayPage from '@/views/Day';

const routes = [
  {
    path: '/',
    name: 'day',
    component: DayPage
  },
  {
    path: '/month',
    name: 'month',
    component: () => import(
        '../views/Month.vue'
        )
  },
  {
    path: '/Year',
    name: 'year',
    component: () => import(
        '../views/Year.vue'
        )
  }

]

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
