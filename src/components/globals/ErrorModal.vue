<template>
  <div>
    <b-modal ref="errorModal" hide-footer>
      <div class="d-block text-center">
        <h3>{{message}}</h3>
      </div>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Fechar</b-btn>
    </b-modal>
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.state.error.message;
    },
  },
  created() {
    this.$store.watch(
      (state) => {
        if (state.error.code > 200 || state.error.code === 'Error') {
          this.$refs.errorModal.show();
        }
      },
    );
  },
  methods: {
    hideModal() {
      this.$store.dispatch('clearError');
      this.$refs.errorModal.hide();
    },
  },
};
</script>
