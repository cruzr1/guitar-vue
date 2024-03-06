<script lang="ts">
import { AppRoute } from '@/const';

export default {
  name: 'BreadcrumbsView',
  data () {
    return {
      AppRoute,
    }
  },
  props: {
    isProduct: {
      required: false,
      type: Boolean
    },
    name: {
      required: false,
      type: String,
    }
  }
}

</script>


<template>
  <ul
    class="breadcrumbs"
    :class="{'page-content__breadcrumbs': isProduct}"
  ><li :key="AppRoute.Login" class="breadcrumbs__item"><RouterLink class="link" :to="AppRoute.Login">{{isProduct ? 'Главная' : 'Вход'}}</RouterLink>
      </li>
      <li :key="AppRoute.Products" class="breadcrumbs__item"><RouterLink class="link" :to="AppRoute.Products">{{isProduct ? 'Каталог' : 'Товары'}}</RouterLink>
      </li>
      <li :key="name" v-if="name" class="breadcrumbs__item"><RouterLink to='#' class="link">{{name}}</RouterLink>
      </li>
  </ul>
</template>
