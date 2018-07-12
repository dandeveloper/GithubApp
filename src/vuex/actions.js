import { fetchUser, fetchUserRepos, fetchRepo } from '@/services/github-service';

export default {
  fetchUser(context, user) {
    return fetchUser(user).then((response) => {
      context.commit('FETCH_USER', response.data);
    }).catch((err) => {
      context.commit('REQUEST_ERROR', err.response.status);
    });
  },
  fetchUserRepos(context, currentUser) {
    return fetchUserRepos(currentUser).then((response) => {
      context.commit('FETCH_USER_REPOS', response.data);
      context.commit('REPOS_STARS_DESC', context.state);
    }).catch((err) => {
      context.commit('REQUEST_ERROR', err);
    });
  },
  fetchRepo(context, fullName) {
    return fetchRepo(fullName).then((response) => {
      context.commit('FETCH_REPO', response.data);
    }).catch((err) => {
      context.commit('REQUEST_ERROR', err.response.status);
    });
  },
  clearError(context) {
    context.commit('CLEAR_ERROR');
  },
  reposOrder(context) {
    if (context.state.reposOrder === 'ASC') {
      context.commit('REPOS_STARS_DESC', context.state);
    } else if (context.state.reposOrder === 'DESC') {
      context.commit('REPOS_STARS_ASC', context.state);
    }
  },
  showRepoDetails(context, payload) {
    context.commit('SHOW_REPO_DETAILS', payload);
  },
};
