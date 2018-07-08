<template>
  <div class="user__details container">
    <div class="row">
      <div class="col-md-4">
        <img :src="user.avatar_url" class="user__avatar">
      </div>
      <div class="user__infos col-md-8">
        <div class="social">
          <span class="seguidores">
            Seguidores <span class="badge badge-primary badge-pill">{{user.followers}}</span>
          </span>
          <span class="seguidores">
            Seguindo <span class="badge badge-primary badge-pill">{{user.following}}</span>
          </span>
        </div>
        <h2 class="user__name">{{user.name}}</h2>
        <strong class="user__login">{{user.login}}</strong>
        <a :href="`mailto:${user.email}`" class="user__email">{{user.email}}</a>
        <p class="user__bio">{{user.bio}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
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
.seguidores {
  margin-right: 20px;
}
.user__email {
  display: block;
}
.user__details {
    padding: 40px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 5vh;
}
</style>
