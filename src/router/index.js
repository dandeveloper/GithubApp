import Vue from 'vue';
import Router from 'vue-router';
import UserSearch from '@/components/user/UserSearch';
import User from '@/components/user/User';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'UserSearch',
      component: UserSearch,
    },
    {
      path: '/user/:login',
      name: 'User',
      component: User,
    },
  ],
});
