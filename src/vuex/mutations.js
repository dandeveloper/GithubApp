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
      state.error.code = payload;
      switch (state.error.code) {
        case 404:
          state.error.message = 'Usuário não encontrado.';
          break;
        case 403:
          state.error.message = 'Limite de buscas excedidas, tente mais tarde.';
          break;
        default:
          state.error.message = 'Erro interno no servidor.';
          break;
      }
    }
  },
  CLEAR_ERROR(state) {
    state.error = {
      code: '',
      message: '',
    };
  },
  REPOS_STARS_ASC(state) {
    state.repos = state.repos.sort((a, b) => {
      const starsA = a.stargazers_count;
      const starsB = b.stargazers_count;
      let comparison = 0;
      if (starsA > starsB) {
        comparison = 1;
      } else if (starsA < starsB) {
        comparison = -1;
      }
      return comparison;
    });
  },
  REPOS_STARS_DESC(state) {
    state.repos = state.repos.sort((a, b) => {
      const starsA = a.stargazers_count;
      const starsB = b.stargazers_count;
      let comparison = 0;
      if (starsA < starsB) {
        comparison = 1;
      } else if (starsA > starsB) {
        comparison = -1;
      }
      return comparison;
    });
  },
};
