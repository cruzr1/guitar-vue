<script lang="ts">
import { defineComponent } from 'vue';
import BreadcrumbsView from '@/components/BreadcrumbsView.vue';
import CatalogFilterView from '@/components/CatalogFilterView.vue';
import CatalogListView from '@/components/CatalogListView.vue';
import CatalogSortView from '@/components/CatalogSortView.vue';
import PaginationView from '@/components/PaginationView.vue';
import { AppRoute } from '@/const';
import router from '@/router';


export default defineComponent({
  name: 'ProductListView',
  data() {
    return {
      AppRoute,
      router
    }
  },
  components: {
    BreadcrumbsView,
    CatalogFilterView,
    CatalogListView,
    CatalogSortView,
    PaginationView
  },
})

</script>


<template>
  <section className="product-list">
    <div className="container">
      <h1 className="product-list__title">Список товаров</h1>
      <BreadcrumbsView />
      <div className="catalog">
        <CatalogFilterView />
        <CatalogSortView />
        <CatalogListView />
      </div>
      <button
        className="button product-list__button button--red button--big"
        @click="() => router.push(AppRoute.AddItem)"
      >Добавить новый товар</button>
      <PaginationView />
    </div>
  </section>
</template>
