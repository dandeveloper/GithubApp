import UserSearch from '@/components/user/UserSearch';
import User from '@/components/user/User';
import Repo from '@/components/repo/Repo';
import NotFound from '@/components/globals/NotFound';

export default {
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
    {
      path: '/repo/:reponame',
      name: 'Repo',
      component: Repo,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
};
