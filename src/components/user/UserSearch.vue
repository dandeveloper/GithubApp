<template>
  <div>
    <Header />
    <div class="container">
      <form onsubmit="return false" class="search__form">
        <div class="input-group mb-3">
          <input type="search" class="search__input form-control"
          @keyup.enter="redirectToUser($event.target.value)"
          @input="debounceInput" placeholder="Faça sua busca aqui...">
          <div class="input-group-append">
            <button @onClick="redirectToUser()"
            class="search__button btn btn-primary">Buscar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>

import debounce from 'debounce';

export default {
  methods: {

    debounceInput:
      debounce(function _debounce(e) {
        const value = e.target.value;
        if (value) {
          this.$store.dispatch('fetchUser', value);
        }
      },
      1000),

    redirectToUser(value) {
      if (value.length) {
        this.$store.dispatch('fetchUser', value).then(() => {
          this.$router.push(`/user/${this.$store.state.user.login}`);
        });
      }
    },
  },
};
</script>

<style lang="postcss" scoped>

</style>
