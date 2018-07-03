<template>
  <div class="user__repos">
    <ul class="user__repos-list">
      <li v-for="repo in reposList" :key="repo.id">
          <a href="#" class="repo__link" @onClick="goToRepo(repo.full_name, repo.name)" >{{ repo.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    reposList: function reposList() {
      return this.$store.state.repos;
    },
  },
  mounted() {
    this.$store.dispatch('fetchUserRepos', this.$store.state.user.login);
  },
  methods: {
    redirectToRepo(full_name, name) {
      this.dispatch('fetchRepo', full_name);
      this.$router.push(`/repo/${name}`);
    }
  }
};
</script>
