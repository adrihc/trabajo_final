import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/EmptyView.vue';
import LoginView from '../views/LoginView.vue';
import AlertView from '../components/Alerts.vue';
import ReminderView from '../components/Calendar.vue';
import CircleView from '../components/CircleOfCare.vue';
import Inbox from '../components/Inbox.vue';
import Sent from '../components/Sent.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView
    },
    {
      path: '/alerts',
      name: 'alerts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AlertView,
      children:[
        {
          path: '',
          component: Inbox
        },
        {
          path: 'sent',
          component: Sent
        }
      ]
    },
    {
      path: '/calendar',
      name: 'calendar',
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
