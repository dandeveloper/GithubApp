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
    this.populateUser();
  },
  methods: {
    populateUser() {
      const loginParam = this.$route.params.login;
      if (loginParam) {
        this.$store.dispatch('fetchUser', loginParam).then(() => {
          this.$store.dispatch('fetchUserRepos', loginParam);
        }).then(() => {
          if (this.$store.state.error.code === 404) {
            this.$router.push('/404');
          }
        });
      } else {
        this.$router.push('/404');
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
