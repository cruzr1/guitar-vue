<script lang="ts">
import { defineComponent } from 'vue';
import ItemFormView from '@/components/ItemFormView.vue';

export default defineComponent ({
  name: 'AddItemView',
  components: {
    ItemFormView
  }
})
</script>


<template>
  <ItemFormView :is-add-form="true" />
</template>
