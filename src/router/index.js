import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Fixed from '../views/Fixed/Fixed.vue';
import Problem from '../views/Problem/Problem.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/fixed',
    name: 'Fixed',
    component: Fixed,
  },
  {
    path: '/problem',
    name: 'Problem',
    component: Problem,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
