<script lang="ts">
import { AppRoute } from '@/const';
import router from '@/router'
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'ErrorPageView',
  data() {
    return {
      AppRoute,
      router
    }
  }
})

</script>


<template>
  <div className="container">
    <section className="error">
      <h1 className="error__title">404</h1><span className="error__subtitle">Страница не найдена.</span>
      <p className="error__text"> Возможно, страница была удалена или<br/>её вовсе не существовало.</p>
      <button
        className="button button__error button--small button--black-border"
        @click="() => router.push(AppRoute.Products)"
      >Продолжить покупки</button>
    </section>
  </div>
</template>
