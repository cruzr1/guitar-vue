<script lang="ts">
import { RequestStatus } from '@/const';
import { defineComponent } from 'vue';
import CatalogItemView from '@/components/CatalogItemView.vue'
import FailedLoadingView from './FailedLoadingView.vue';
import LoadingView from '@/views/LoadingView.vue';
import { mapState, mapActions } from 'vuex';



export default defineComponent({
  name: 'CatalogListView',
  components: {
    CatalogItemView,
    FailedLoadingView,
    LoadingView
},
  data() {
    return {
      hasError: false,
    }
  },
  computed: {
    ...mapState('guitars', [
      'guitars',
      'guitarsLoadingStatus',
      'hasDataError',
      'currentPage'
    ]),
    ...mapState('guitarList', [
      'guitarTypeFilter',
      'stringsCountFilter',
      'activeSortOrder',
      'activeSortField'
    ]),
    isGuitarsLoadingPending () {
      return this.guitarsLoadingStatus === RequestStatus.Pending;
    },
    isGuitarsLoadingFulfilled () {
      return this.guitarsLoadingStatus === RequestStatus.Fulfilled;
    }
  },
  methods: {
    ...mapActions([
    'loadGuitars'
    ]),
  },
  mounted () {
    this.loadGuitars({
      type: this.guitarTypeFilter,
      stringsCount: this.stringsCountFilter,
      page: this.currentPage,
      sortByField: this.activeSortField,
      sortByOrder: this.activeSortOrder
    })
  }
})
</script>

<template>
  <FailedLoadingView v-if="hasError" />
  <LoadingView v-if="isGuitarsLoadingPending" />
  <div v-if="!hasError && isGuitarsLoadingFulfilled" class="catalog-cards">
    <ul class="catalog-cards__list">
      <template v-for="guitar in guitars" :key="guitar.id">
        <li class="catalog-item" >
          <CatalogItemView :guitar="guitar" />
        </li>
      </template>
    </ul>
  </div>
</template>
