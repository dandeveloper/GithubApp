<template>
  <div class="user__details container">
    <div class="row">
      <div class="col-md-4">
        <img :src="this.user.avatar_url" class="user__avatar">
      </div>
      <div class="user__infos col-md-8">
        <div class="social">
          <span class="seguidores">
            Seguidores <span class="quantity">{{this.user.followers}}</span>
          </span>
          <span class="seguidores">
            Seguindo <span class="quantity">{{this.user.following}}</span>
          </span>
        </div>
        <h2 class="user__name">{{this.user.name}}</h2>
        <strong class="user__login">{{this.user.login}}</strong>
        <a :href="`mailto:${this.user.email}`" class="user__email">{{this.user.email}}</a>
        <p class="user__bio">{{this.user.bio}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.getUserState();
  },

  methods: {
    getUserState() {
      if (this.$store.state.user.login.length) {
        this.user = this.$store.state.user;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.user__avatar {
  border-radius: 4px;
  width: 100%;
  height: auto;
}
.seguidores, .seguidores {
  font-size: 14px;
}
.quantity {
  border-radius: 100%;
  background: rgba(27,31,35,0.08);
  padding: 2px 5px;
  text-align: center;
  margin-right: 20px;
}
.user__email {
  display: block;
}
</style>
