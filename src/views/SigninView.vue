<script lang="ts">
  import { defineComponent } from 'vue';
  import LoginFormView from '@/components/LoginFormView.vue';

  export default defineComponent ({
    name: 'SigninView',
    components: {
      LoginFormView
    }
  })
</script>

<template>
  <LoginFormView :isSignin="true" />
</template>
