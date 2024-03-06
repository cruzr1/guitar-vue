<script lang="ts">
import { defineComponent } from 'vue';
import ItemFormView from '@/components/ItemFormView.vue';

export default defineComponent ({
  name: 'EditItemView',
  components: {
    ItemFormView
  }
})
</script>


<template>
  <ItemFormView  :is-add-form="false"/>
</template>
