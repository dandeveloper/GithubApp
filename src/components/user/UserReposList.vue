<template>
  <div class="user__repos container">
    <div class="user__repos-header row">
      <strong class="col-md-6">Lista de Repositórios</strong>
      <div class="col-md-6 text-right">
        <strong>Ordernar Por:</strong>
        <a href="#"
          @click="orderBy($event)" class="order-by"><i class="fa"
          :class="classArrowDirection"></i> {{orderText}} de Estrelas</a>
      </div>
    </div>
    <ul class="user__repos-list list-group">
      <li v-for="repo in reposList" :key="repo.id" class="list-group-item list-group-item-action">
          <a href="#" class="repo__link"
            @click.stop.prevent="showRepoDetails(repo.full_name)">
            <strong class="repo__name"> {{repo.name }}</strong>
            <span class="repo__stars float-right">
              <i class="fa fa-star"></i> Estrelas <span class="quantity">
                {{repo.stargazers_count }}</span>
            </span>
          </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    reposList() {
      return this.$store.state.repos;
    },
    orderText() {
      let message = '';
      if (this.$store.state.reposOrder === 'ASC') {
        message = 'Decrescente';
      } else {
        message = 'Crescente';
      }
      return message;
    },
    classArrowDirection() {
      let className = '';
      if (this.$store.state.reposOrder === 'ASC') {
        className = 'fa-arrow-down';
      } else {
        className = 'fa-arrow-up';
      }
      return className;
    },
  },
  mounted() {
    this.$store.dispatch('fetchUserRepos', this.$store.state.user.login).then(() => {
      this.$store.dispatch('reposStarsDESC');
    });
  },
  methods: {
    orderBy(e) {
      e.preventDefault();
      this.$store.dispatch('reposOrder', this.$store.state.reposOrder);
    },
    showRepoDetails(fullName) {
      this.$store.dispatch('fetchRepo', fullName).then(() => {
        this.$store.dispatch('showRepoDetails', true);
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
.user__repos {
  margin-bottom: 60px;
}
.repo__stars {
  background: #eaeaea;
  border-radius: 3px;
  padding: 3px 5px;
  font-size: 14px;
}
.repo__link {
  display: block;
}
.user__repos-header {
  margin-bottom: 10px;
}
</style>
