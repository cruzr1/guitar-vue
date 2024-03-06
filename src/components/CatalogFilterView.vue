<script lang="ts">
  import { GUITAR_CATEGORIES, GuitarNames, STRINGS } from '@/const';
  import { defineComponent } from 'vue';
  import { mapGetters, mapMutations } from 'vuex';


  export default defineComponent({
    name: 'CatalogFilterView',
    data() {
      return {
        GUITAR_CATEGORIES,
        GuitarNames,
        STRINGS
      }
    },
    computed: {
      ...mapGetters('guitarList', {
        guitarTypes: 'selectGuitarTypeFilter',
        stringsCount: 'selectStringsCountFilter',

      })
    },
    methods: {
      ...mapMutations('guitarList', [
        'updateGuitarTypeFilter',
        'updateStringsCountFilter',
        'resetFilter'
      ]),
    }
  })


</script>

<template>
  <form class="catalog-filter" action="#" method="post">
    <h2 class="title title--bigger catalog-filter__title">Фильтр</h2>
    <fieldset class="catalog-filter__block">
      <legend class="catalog-filter__block-title">Тип гитар</legend>
      <template v-for="category in GUITAR_CATEGORIES" :key="category">
        <div class="form-checkbox catalog-filter__block-item" >
          <input
            class="visually-hidden"
            type="checkbox"
            :id="category"
            :name="category"
            :checked="guitarTypes.includes(category)"
            @click="updateGuitarTypeFilter(category)"
          >
          <label :for="category">{{ GuitarNames[category]}}</label>
        </div>
      </template>
    </fieldset>
    <fieldset class="catalog-filter__block">
      <legend class="catalog-filter__block-title">Количество струн</legend>
      <template v-for="num in STRINGS" :key="num">
        <div class="form-checkbox catalog-filter__block-item">
          <input
            class="visually-hidden"
            type="checkbox"
            :id="`${num}-strings`"
            :name="`${num}-strings`"
            :checked="stringsCount.includes(num)"
            @click="updateStringsCountFilter(num)"
          >
          <label :for="`${num}-strings`">{{num}}</label>
        </div>
      </template>
    </fieldset>
    <button
      class="catalog-filter__reset-btn button button--black-border button--medium"
      type="reset"
      @click="resetFilter"
    >Очистить</button>
  </form>
</template>
