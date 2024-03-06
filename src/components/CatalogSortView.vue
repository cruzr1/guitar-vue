<script lang="ts">
import { defineComponent } from 'vue';
import { SortOrderField, SortOrder } from '@/const';
import { mapGetters, mapMutations } from 'vuex';

  export default defineComponent({
    name: 'CatalogSortView',
    data() {
      return {
        SortOrder,
        SortOrderField
      }
    },
    computed: {
      isSortedPrice() {
        return this.activeSortField === SortOrderField.Price
      },
      isSortedDate() {
        return this.activeSortField === SortOrderField.CreatedAt
      },
      isSortedAsc() {
        return this.activeSortOrder === SortOrder.Asc
      },
      isSortedDesc() {
        return this.activeSortOrder === SortOrder.Desc
      },
      ...mapGetters('guitarList', {
      activeSortOrder: 'selectActiveSortOrder',
      activeSortField: 'selectActiveSortField',
      })
    },
    methods: {
      ...mapMutations('guitarList', [
        'updateSortOrder',
        'updateSortField',
      ])
    }
  })
</script>

<template>
  <div class="catalog-sort">
    <h2 class="catalog-sort__title">Сортировать:</h2>
    <div class="catalog-sort__type">
      <button
        class="catalog-sort__type-button"
        :class="{'catalog-sort__type-button--active': isSortedDate}"
        aria-label="по дате"
        @click="updateSortField(SortOrderField.CreatedAt)"
        >по дате</button>
      <button
        class="catalog-sort__type-button"
        :class= "{'catalog-sort__type-button--active': isSortedPrice}"
        aria-label="по цене"
        @click="updateSortField(SortOrderField.Price)"
        >по цене</button>
    </div>
    <div class="catalog-sort__order">
      <button
        class="catalog-sort__order-button catalog-sort__order-button--up"
        :class="{'catalog-sort__order-button--active': isSortedAsc}"
        aria-label="По возрастанию"
        @click="updateSortOrder(SortOrder.Asc)"
      ></button>
      <button
        class="catalog-sort__order-button catalog-sort__order-button--down"
        :class="{'catalog-sort__order-button--active': isSortedDesc}"
        aria-label="По убыванию"
        @click="updateSortOrder(SortOrder.Desc)"
      ></button>
    </div>
  </div>
</template>
