<template>
  <b-modal ref="repoModal" size="lg"
  hide-footer cancel-disabled no-close-on-esc hide-header-close no-close-on-backdrop
  :title="repo.name">
    <div class="d-block">
      <span class="stars"><i class="fa fa-star"></i> Estrelas {{repo.stargazers_count}}</span>
      <span class="language">{{repo.language}}</span>
      <a :href="`https://github.com/${repo.full_name}`" class="repo__link" target="_blank">
        <i class="fa fa-link"></i> URL: {{`https://github.com/${repo.full_name}`}}
      </a>
    </div>
    <h3 class="repo__full-name d-block">{{repo.full_name}}</h3>
    <div class="d-block repo__description-wrapper">
      <p class="repo__description">{{repo.description}}</p>
    </div>
    <b-btn class="btn-hide-modal mt-3" variant="success" block @click="hideModal">Fechar</b-btn>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      repo: this.$store.state.repo,
    };
  },
  created() {
    this.$store.watch(
      (state) => {
        this.repo = this.$store.state.repo;
        if (state.showRepoDetails === true) {
          this.$refs.repoModal.show();
        }
      },
    );
  },
  mounted() {
    this.repo = this.$store.state.repo;
  },
  methods: {
    hideModal() {
      this.$store.dispatch('showRepoDetails', false);
      this.$refs.repoModal.hide();
    },
  },
};
</script>

<style lang="postcss" scoped>
.stars {
  background: #eaeaea;
  border-radius: 3px;
  padding: 3px 5px;
  font-size: 14px;
}
.language {
    background: #eaeaea;
    border-radius: 3px;
    padding: 3px 5px;
    font-size: 14px;
    font-weight: 600;
    margin: 0 5px;
}
.d-block {
  padding: 10px 20px;
}
@media screen and (max-width: 768px) {
  .d-block {
    padding: 10px 0px;
  }
  .repo__link {
    display: block;
    margin-top: 10px;
    font-size: 14px
  }
  .repo__full-name {
    font-size: 1.5rem;
  }
}
</style>
