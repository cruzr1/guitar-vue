<script lang="ts">
import { defineComponent } from 'vue';
import NavigationListView from './NavigationListView.vue';
import { AppRoute, AuthStatus } from '@/const';
import { mapState } from 'vuex';

  export default defineComponent({
    name: 'HeaderView',
    components: {
      NavigationListView
    },
    data() {
      return {
        AppRoute
      }
    },
    computed: {
      ...mapState('user', [
        'email',
        'authStatus'
      ]),
      isAuthorised () {
        return this.authStatus === AuthStatus.Auth
      }
    }
  })
</script>


<template>
  <header :class="[{'header--admin': isAuthorised}, 'header']" id="header">
    <div class="container">
      <div class="header__wrapper"><RouterLink class="header__logo logo" :to="AppRoute.Login"><img class="logo__img" width="70" height="70" src="/markup/img/svg/logo.svg" alt="Логотип"/></RouterLink>
        <NavigationListView />
      </div>
    </div>
  </header>
</template>
