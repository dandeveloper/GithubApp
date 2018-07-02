export default {
  FETCH_USER(state, payload) {
    if (payload.login !== null) {
      state.user = payload;
    }
  },
};
