<template>
  <section class="repo">
    <Header />
    <div class="container">
      <div class="row">
        <div class="repo__header">
          <h2 class="repo__name">
            {{this.name}}
          </h2>
          <span class="stars">Estrelas {{this.stars}}</span>
          <span class="language">{{this.language}}</span>
          <a :href="`https://github.com/${this.full_name}`" class="repo__link" target="_blank">
            {{`https://github.com/${this.full_name}`}}
          </a>
        </div>
        <div class="repo__body">
          <div class="repo__description">
            {{this.description}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      repo: {},
    };
  },
  mounted() {
    this.getRepoState();
  },
  methods: {
    getRepoState() {
      if (typeof this.$store.state.repo !== 'undefined') {
        this.repo = this.$store.state.repo;
      }
    },
  },
};
</script>
