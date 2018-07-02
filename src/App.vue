<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
  $theme-colors: (
    "primary": #24292e
  );
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
