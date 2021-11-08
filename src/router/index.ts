import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import List from '../views/List.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'List',
    component: List,
  },
  {
    path: '/form',
    name: 'Form',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
