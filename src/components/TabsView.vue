<script lang="ts">
  import { defineComponent} from 'vue';
  import { GuitarNames } from '@/const';
  import { type GuitarCategoryType } from '@/types';
  import { mapState } from 'vuex';

  export default defineComponent ({
    name: 'TabsView',
    data () {
      return{
        isSummary: false,
        GuitarNames,
      }
    },
    methods: {
      setSummary(bool: boolean) {
        this.isSummary = bool;
      }
    },
    computed: {
      ...mapState('guitarForm', [
        'article',
        'type',
        'stringsCount',
        'description'
      ]),
      guitarType() {
        return this.type as GuitarCategoryType
      }
    },
  })

</script>


<template>
  <div class="tabs">
    <RouterLink
      :class="['button', 'button--medium', 'tabs__button', {'button--black-border': !isSummary}]"
      to="#"
      @click="setSummary(true)"
    >Характеристики</RouterLink>
    <RouterLink
      :class="['button', 'button--medium', 'tabs__button', {'button--black-border': isSummary}]"
      to="#"
      @click="setSummary(false)"
    >Описание</RouterLink>
    <div class="tabs__content" id="characteristics">
      <table :class="['tabs__table', {'hidden': !isSummary}]">
        <tbody>
          <tr class="tabs__table-row">
            <td class="tabs__title">Артикул:</td>
            <td class="tabs__value">{{article}}</td>
          </tr>
          <tr class="tabs__table-row">
            <td class="tabs__title">Тип:</td>
            <td class="tabs__value">{{GuitarNames[guitarType]}}</td>
          </tr>
          <tr class="tabs__table-row">
            <td class="tabs__title">Количество струн:</td>
            <td class="tabs__value">{{stringsCount}} струнная</td>
          </tr>
        </tbody>
      </table>
      <p :class="['tabs__product-description', {'hidden': isSummary}]">{description}</p>
    </div>
  </div>
</template>
