import { fetchUser } from '@/services/user-service';

export default {
  fetchUser(context, user) {
    return fetchUser(user).then((response) => {
      context.commit('FETCH_USER', response.data);
    }).catch(err => console.log(err));
  },
};
