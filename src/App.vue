<script lang="ts">
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';
import ErrorView from './components/ErrorView.vue';
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'App',
  components: {
    HeaderView,
    FooterView,
    ErrorView
  },
  async created() {
    await this.$store.dispatch('authoriseUser');
  }
})
</script>


<template>
  <ErrorView />
  <div className="wrapper">
    <HeaderView />
    <main className="page-content">
      <RouterView />
    </main>
    <FooterView />
  </div>
</template>

<style lang="css">
@import '../markup/css/style.css'
</style>
