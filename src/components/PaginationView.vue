<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';

  const DEFAULT_PAGE_NUMBER = 1;


  export default defineComponent({
    name: 'PaginationView',
    data() {
      return {
        DEFAULT_PAGE_NUMBER
      }
    },
    methods: {
      ...mapMutations('guitars', {
        updateCurrentPageNumber: 'updateCurrentPageNumber'
      }),
      handlePageCLick (val: number) {
        const newPage = val >= DEFAULT_PAGE_NUMBER && val <= this.totalPages ? val : this.currentPage;
        this.updateCurrentPageNumber(newPage);
      },
      handlePageIncrement () {
        this.updateCurrentPageNumber(this.currentPage + 1);
      },
      handlePageDecrement () {
        this.updateCurrentPageNumber(this.currentPage - 1);
      },
    },
    computed: {
      ...mapGetters('guitars', {
        currentPage: 'selectCurrentPageNumber',
        totalPages: 'selectTotalPagesNumber'
      }),
      firstPage() {
        return Math.max(this.currentPage - DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_NUMBER);
      },
      lastPage() {
        return Math.min(this.currentPage + DEFAULT_PAGE_NUMBER, this.totalPages);
      },
      isBackDisplay () {
        return this.currentPage > 1
      },
      isNextDisplay () {
        return this.totalPages > this.currentPage
      },
      pageNumbers () {
        return Array.from({length: this.lastPage - this.firstPage + 1}, (val, ind) => val = ind + this.firstPage)
      }
    }
  })
</script>


<template>
  <div class="pagination product-list__pagination">
    <ul class="pagination__list">
      <li v-if="isBackDisplay" class="pagination__page pagination__page--next" id="back">
        <RouterLink
            class="link pagination__page-link"
            to='#'
            @click="handlePageDecrement"
          >Назад</RouterLink>
      </li>
      <template v-for="val in pageNumbers" :key="val">
        <li :class="['pagination__page', {'pagination__page--active': val === currentPage}]">
          <RouterLink
            class="link pagination__page-link"
            @click="handlePageCLick"
            to='#'
          >{{val}}</RouterLink>
        </li>
      </template>
      <li v-if="isNextDisplay"  class="pagination__page pagination__page--next" id="next">
        <RouterLink
            class="link pagination__page-link"
            to='#'
            @click="handlePageIncrement"
          >Далее</RouterLink>
      </li>
    </ul>
  </div>
</template>
