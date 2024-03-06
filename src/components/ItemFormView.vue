<script lang="ts">
import { defineComponent, ref } from 'vue';
import BreadcrumbsView from '@/components/BreadcrumbsView.vue';
import { GuitarNames, STRINGS, DEFAULT_IMAGE_PATH, AppRoute } from '@/const'
import { adaptImage } from '@/helpers';
import { mapState, mapMutations, mapActions } from 'vuex';

  export default defineComponent ({
    setup() {
      const file = ref<File | null>(null);
      const handleFileChange = (evt: Event): void => {
        const target = evt.target as HTMLInputElement
        if (target && target.files) {
          file.value = target.files[0];
        }
      }

      return {handleFileChange, file};
    },
    components: {
      BreadcrumbsView
    },
    name: 'ItemFormView',
    data() {
      return {
        GuitarNames,
        STRINGS,
      }
    },

    props: {
      isAddForm: Boolean
    },
    methods: {
      ...mapActions([
        'updateGuitars',
        'postGuitarForm'
      ]),
      adaptImage,
      handleAddImageClick() {
        (this.$refs.inputRef as HTMLInputElement).click();
      },
      handleImageUpload(evt: Event) {
        this.handleFileChange(evt);
        this.SetGuitarImageURL(`${DEFAULT_IMAGE_PATH}${this.file?.name}`);

      },
      handleDeleteImageClick() {
        this.SetGuitarImageURL('');
      },
      handleReturnClick() {
        this.$router.push(AppRoute.Products);
      },
      async handleFormSubmit() {
        const guitarForm = {
          id: this.id,
            name: this.name,
            description: this.description,
            createdAt: this.createdAt,
            imageURL: this.imageURL,
            type: this.type,
            stringsCount: this.stringsCount,
            article: this.article,
            price: parseInt(this.price) || 0
        }
        if (this.isAddForm) {
          await this.postGuitarForm(guitarForm);
        } else {
          await this.updateGuitars(guitarForm);
        }
      },
      ...mapMutations('guitarForm', [
        'SetGuitarImageURL',
        'SetGuitarCategoryName',
        'SetStringsCount',
        'SetGuitarCreatedDate',
        'SetGuitarName',
        'SetPrice',
        'SetArticle',
        'SetGuitarDecription'
      ])
    },
    computed: {
      classPrefix () {
        return this.isAddForm ? 'add' : 'edit'
      },
      ...mapState('guitarForm', [
        'id',
        'name',
        'description',
        'createdAt',
        'imageURL',
        'type',
        'stringsCount',
        'article',
        'price',
      ])
    }
  })
</script>


<template>
  <section :class="`${classPrefix}-item`">
    <div class="container">
      <h1 :class="`${classPrefix}-item__title`">{{isAddForm ? 'Новый товар' : name}}</h1>
      <BreadcrumbsView :name="isAddForm ? 'Новый товар' : name" />
      <form
        :class="`${classPrefix}-item__form`"
        action="#"
        method="get"
        @submit.prevent
      >
        <div :class="`${classPrefix}-item__form-left`">
          <div :class="`edit-item-image ${classPrefix}-item__form-image`">
            <div class="edit-item-image__image-wrap">
              <img class="edit-item-image__image" :src="imageURL" :srcSet="adaptImage(imageURL)" width="133" height="332" :alt="file ? name : 'Изображение гитары'"/>
            </div>
            <div class="edit-item-image__btn-wrap">
            <input
              style="display: none"
              type="file"
              ref="inputRef"
              @change="handleImageUpload($event)"
            />
              <button
                class="button button--small button--black-border edit-item-image__btn"
                @click="handleAddImageClick"
              >Добавить
              </button>
              <button
                class="button button--small button--black-border edit-item-image__btn"
                @click="handleDeleteImageClick"
              >Удалить</button>
            </div>
          </div>
          <div :class="`input-radio ${classPrefix}-item__form-radio`"><span>{{isAddForm ? 'Выберите тип товара' : 'Тип товара'}}</span>
              <template v-for="[id, guitarName] in Object.entries(GuitarNames)" :key="id">
                <input
                  type="radio"
                  :id="id"
                  name="item-type"
                  :checked="type === id"
                  @change="SetGuitarCategoryName(id)"
                />
                <label :for="id">{{guitarName}}</label>
              </template>
          </div>
          <div :class="`input-radio ${classPrefix}-item__form-radio`"><span>Количество струн</span>
            <template v-for="num in STRINGS" :key="num">
              <input
                type="radio"
                :id="`string-qty-${num}`"
                name="string-qty"
                @change="SetStringsCount(num)"
              />
              <label :for="`string-qty-${num}`">{{num}}</label>
            </template>
          </div>
        </div>
        <div :class="`${classPrefix}-item__form-right`">
          <div :class="`custom-input ${classPrefix}-item__form-input`">
            <label><span>Дата добавления товара</span>
              <input
                type="date"
                style="justify-content: end"
                :value="createdAt"
                @change="(evt) => SetGuitarCreatedDate((evt.target as HTMLInputElement).value)"
              />
            </label>
            <p>Заполните поле</p>
          </div>
          <div :class="`custom-input ${classPrefix}-item__form-input`">
            <label><span>{{isAddForm ? 'Введите наименование товара' : 'Наименование товара'}}</span>
              <input
                type="text"
                name="title"
                :value="name"
                @change="(evt) => SetGuitarName((evt.target as HTMLInputElement).value)"
                placeholder="Наименование"
              />
            </label>
            <p>Заполните поле</p>
          </div>
          <div :class="[`custom-input ${classPrefix}-item__form-input`, `${classPrefix}-item__form-input--price`, {'is-placeholder': isAddForm}]">
            <label><span>{{isAddForm ? 'Введите цену товара' : 'Цена товара'}}</span>
              <input
                type="text"
                name="price"
                placeholder="Цена в формате 00 000"
                :value="price"
                @input="(evt) => SetPrice((evt.target as HTMLInputElement).value.replace(/[^0-9]/gm,''))"
              />
            </label>
            <p>Заполните поле</p>
          </div>
          <div :class="`custom-input ${classPrefix}-item__form-input`">
            <label><span>{{isAddForm ? 'Введите артикул товара' : 'Артикул товара'}}</span>
              <input
                type="text"
                name="sku"
                :value="article"
                @change="(evt) => SetArticle((evt.target as HTMLInputElement).value)"
                placeholder="Артикул товара"
              />
            </label>
            <p>Заполните поле</p>
          </div>
          <div :class="`custom-textarea ${classPrefix}-item__form-textarea`">
            <label><span>{{isAddForm ? 'Введите описание товара' : 'Описание товара'}}</span>
              <textarea
                name="description"
                placeholder=""
                :value="description"
                @change="(evt) => SetGuitarDecription((evt.target as HTMLInputElement).value)"
              ></textarea>
            </label>
            <p>Заполните поле</p>
          </div>
        </div>
        <div :class="`${classPrefix}-item__form-buttons-wrap`">
          <button
            :class="['button button--small', `${classPrefix}-item__form-button`]" type="submit"
            @submit="handleFormSubmit"
          >Сохранить изменения</button>
          <button
            :class="['button button--small', `${classPrefix}-item__form-button`]"
            type="button"
            @click="handleReturnClick"
          >Вернуться к списку товаров</button>
        </div>
      </form>
    </div>
  </section>
</template>
