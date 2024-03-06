<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapActions } from 'vuex';

  export default defineComponent({
    name: 'FailedLoadingView',
    methods: {
      ...mapActions(['loadGuitars'])
    }
  })
</script>


<template>
  <p class="error__text">Не удалось загрузить список гитар. Попробуйте еще раз.</p>
    <button
      type="button"
      @click="loadGuitars"
    >Попробовать ещё раз</button>
</template>
