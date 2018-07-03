export default {
  FETCH_USER(state, payload) {
    if (payload.login !== null) {
      state.user = payload;
    }
  },
  FETCH_USER_REPOS(state, payload) {
    const newRepos = payload.map(repo => ({
      ...repo,
    }));
    state.repos = newRepos;
  },
  FETCH_REPO(state, payload) {
    state.repo = payload;
  },
  REQUEST_ERROR(state, payload) {
    if (payload !== null) {
      state.error = payload;
      console.log('Erro no servidor.', payload);
    }
  },
};
