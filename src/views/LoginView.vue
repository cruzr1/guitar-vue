<script lang="ts">
  import LoginFormView from '@/components/LoginFormView.vue';
  import { defineComponent } from 'vue';

  export default defineComponent ({
    name: 'LoginView',
    components: {
      LoginFormView
    }
  })
</script>

<template>
  <LoginFormView :isSignin="false" />
</template>
