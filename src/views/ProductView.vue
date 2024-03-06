<script lang="ts">
import { defineComponent } from 'vue';
import BreadcrumbsView from '@/components/BreadcrumbsView.vue';
import TabsView from '@/components/TabsView.vue';
import ErrorView from '@/components/ErrorView.vue';
import { adaptImage } from '@/helpers';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'ProductView',
  components: {
    BreadcrumbsView,
    TabsView,
    ErrorView,
},
  computed: {
    ...mapState('guitarForm', [
      'hasGuitarFormError',
      'imageURL',
      'name',
      'article',
      'type',
      'stringsCount',
      'description',
    ], ),
  },
  methods: {
    adaptImage,
  }
})
</script>


<template>
  <ErrorView v-if="hasGuitarFormError"/>
  <div v-else class="container">
    <h1 class="page-content__title title title--bigger">Товар</h1>
    <BreadcrumbsView :is-product="true" />
    <div class="product-container"><img class="product-container__img" :src="imageURL" :srcSet="`${adaptImage(imageURL)} 2x`" width="90" height="235" :alt="name"/>
      <div class="product-container__info-wrapper">
        <h2 class="product-container__title title title--big title--uppercase">{{name}}</h2>
        <br/>
        <br/>
        <TabsView />
      </div>
    </div>
  </div>
</template>
