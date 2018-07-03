<template>
  <section class="user">
    <Header />
    <userDetails />
    <userRepos />
  </section>
</template>
<script>
import UserDetails from '@/components/user/UserDetails';
import UserReposList from '@/components/user/UserReposList';

export default {
  mounted() {
    this.checkInvalidUser();
  },
  methods: {
    checkInvalidUser() {
      if (!this.$store.state.user.login.length) {
        this.$router.push('/');
      }
    },
  },
  components: {
    userDetails: UserDetails,
    userRepos: UserReposList,
  },
};
</script>

<style lang="postcss" scoped>
</style>
