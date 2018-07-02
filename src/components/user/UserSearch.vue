<template>
  <div>
    <Header />
    <form onsubmit="return false" class="search__form">
      <input type="search__input" class="input-search"
      @keyup.enter="redirectToUser($event.target.value)"
      @input="debounceInput">
      <button @onClick="redirectToUser()" class="search__button">Buscar</button>
    </form>
    {{this.$store.state.user.login}}
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
      this.$store.dispatch('fetchUser', value).then(() => {
        this.$router.push(`/user/${this.$store.state.user.login}`);
      });
    },
  },
};
</script>

<style lang="postcss" scoped>

</style>
