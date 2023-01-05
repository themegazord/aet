import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../views/Login/LoginView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
