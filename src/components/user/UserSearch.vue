<template>
  <div>
    <Header />
    <div class="container">
      <form @submit.prevent="submitSearch(search)" class="search__form">
        <div class="input-group mb-3">
          <input type="search" v-model="search" class="search__input form-control"
          placeholder="Faça sua busca aqui...">
          <div class="input-group-append">
            <button class="search__button btn btn-primary">Buscar</button>
          </div>
        </div>
      </form>
    </div>
    <errorModal />
  </div>
</template>
<script>

import ErrorModal from '@/components/globals/ErrorModal';

export default {
  data() {
    return {
      search: '',
    };
  },
  methods: {
    submitSearch(value) {
      if (value.length) {
        this.$store.dispatch('fetchUser', value).then(() => {
          this.redirectToUser();
        });
      }
    },
    redirectToUser() {
      if (!this.$store.state.error.code) {
        this.$router.push({ name: 'User', params: { login: this.search } });
      }
    },
  },
  components: {
    errorModal: ErrorModal,
  },
};
</script>

<style lang="postcss" scoped>

</style>
