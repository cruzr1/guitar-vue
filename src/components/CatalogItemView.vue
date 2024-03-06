<script lang="ts">
  import { GuitarNames, AppRoute, DEFAULT_IMAGE_PATH } from '@/const';
  import { type GuitarType } from '../types';
import { defineComponent, type PropType }from 'vue';
import dayjs from 'dayjs';


  export default defineComponent({
    name: 'CatalogItemView',
    data() {
      return {
        GuitarNames,
        AppRoute,
        DEFAULT_IMAGE_PATH
      }
    },
   computed: {
    createdDate () {
      return dayjs(this.guitar.createdAt).format('DD.MM.YYYY');
    },
   },
    props: {
      // id: String,
      // name: String,
      // description: String,
      // createdAt: Date,
      // imageURL: String,
      // type: {
      //   type: String as PropType<GuitarCategoryType>,
      //   default: 'electric'
      // },
      // article: String,
      // price: Number,
      // stringsCount: Number as PropType<StringsCountType>
        guitar: {
          required: true,
          type: Object as PropType<GuitarType>
        }
    }
  })
</script>

<template>
  <div class="catalog-item__data"><img :src="`markup/${guitar.imageURL}`" width="36" height="93" alt="Картинка гитары"/>
        <div class="catalog-item__data-wrapper">
          <RouterLink class="link" to={itemPath}><p class="catalog-item__data-title">{{`${GuitarNames[guitar.type]} ${guitar.name}`}}</p></RouterLink>
          <br/>
          <p class="catalog-item__data-date">Дата добавления {{ createdDate }}</p>
          <p class="catalog-item__data-price">{{ guitar.price?.toLocaleString()}} ₽</p>
        </div>
      </div>
      <div class="catalog-item__buttons">
        <RouterLink
          class="button button--small button--black-border"
          :to="AppRoute.EditItem"
          aria-label="Редактировать товар"
        >Редактировать</RouterLink>
        <button
          class="button button--small button--black-border"
          type="submit"
          aria-label="Удалить товар"
        >Удалить</button>
      </div>
</template>
