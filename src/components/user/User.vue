<template>
  <section class="user">
    <Header />
    <userDetails />
    <userReposList />
    <repo />
    <errorModal />
  </section>
</template>
<script>
import UserDetails from '@/components/user/UserDetails';
import UserReposList from '@/components/user/UserReposList';
import Repo from '@/components/repo/Repo';
import ErrorModal from '@/components/globals/ErrorModal';

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
    userReposList: UserReposList,
    errorModal: ErrorModal,
    repo: Repo,
  },
};
</script>

<style lang="postcss" scoped>
</style>
