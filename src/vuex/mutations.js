export default {
  FETCH_USER(state, payload) {
    if (payload.login !== null) {
      state.user = payload;
    }
  },
  FETCH_USER_REPOS(state, payload) {
    if (state.user.login) {
      payload.forEach((element) => {
        state.repos.push(element);
      });
    }
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
