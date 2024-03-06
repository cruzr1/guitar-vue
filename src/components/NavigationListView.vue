<script lang="ts">
  import { defineComponent } from 'vue';
  import { AppRoute, AuthStatus } from '@/const';
  import { mapState } from 'vuex';

  export default defineComponent({
    name: 'NavigationListView',
    data() {
      return {
        AppRoute,
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
  <nav class="main-nav">
    <ul class="main-nav__list">
      <template v-if="!isAuthorised">
        <li class="main-nav__item"><RouterLink class="link main-nav__link" to='#'>Каталог</RouterLink>
        </li>
        <li class="main-nav__item"><RouterLink class="link main-nav__link" to='#'>Где купить?</RouterLink>
        </li>
        <li class="main-nav__item"><RouterLink class="link main-nav__link" to='#'>О компании</RouterLink>
        </li>
      </template>
      <template v-else>
        <li class="main-nav__item"><RouterLink class="link main-nav__link" :to="AppRoute.Login">Каталог</RouterLink>
        </li>
        <li class="main-nav__item"><RouterLink class="link main-nav__link" :to="AppRoute.Products">Список товаров</RouterLink>
        </li>
      </template>
    </ul>
  </nav>
  <div class="header__container">
    <span class="header__user-name">{{email}}</span>
    <RouterLink class="header__link" :to="AppRoute.Login" aria-label="Перейти в личный кабинет">
      <svg class="header__link-icon" width="12" height="14" aria-hidden="true">
        <use href="#icon-account"></use>
      </svg>
      <span class="header__link-text">Вход</span>
    </RouterLink>
  </div>
</template>
