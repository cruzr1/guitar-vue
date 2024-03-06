<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapGetters } from 'vuex';

  export default defineComponent({
    name: 'ErrorView',
    computed: {
      ...mapGetters('error', {
        error: 'selectError'
      })
    }
  })
</script>


<template>
  <div v-if="error" class='error-message' data-testid='error-message-text'>{{error}}</div>
</template>

<style scoped>
  .error-message {
    position: fixed;
    z-index: 1;
    top: 30px;
    right: 30px;
    padding: 10px;
    background-color: #d96666;
    color: white;
    border-radius: 5px;
  }
</style>
