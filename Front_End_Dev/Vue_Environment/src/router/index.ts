import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/EmptyView.vue';
import AboutView from '../views/AboutView.vue';
import AlertView from '../components/Alerts.vue';
import ReminderView from '../components/Calendar.vue';
import CircleView from '../components/CircleOfCare.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/alerts',
      name: 'alerts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AlertView
    },
    {
      path: '/reminder',
      name: 'reminder',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ReminderView
    },
    {
      path: '/circle',
      name: 'circle-of-care',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CircleView
    }
  ]
})

export default router
