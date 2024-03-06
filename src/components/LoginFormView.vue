<script lang="ts">
  import { defineComponent } from 'vue';
  import { AppRoute } from '@/const';
  import { mapActions } from 'vuex';

  const NULL_LENGTH = 0;
  const NAME_REGEX = /^.{1,15}$/;
  const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  export const PASSWORD_REGEX = /^.{6,12}$/;

  export default defineComponent({
    name: 'LoginFormview',
    data() {
      return {
        AppRoute,
        isPassVisible: false,
        password: '',
        email: '',
        userName: '',
        NULL_LENGTH
      }
    },
    methods: {
      ...mapActions([
        'signinUser',
        'loginUser'
      ]),
      changePassVisibility () {
        this.isPassVisible = !this.isPassVisible
      },
      async handleFormSubmit () {
        if (this.isSignin === true) {
          await this.signinUser({
            email: this.email,
            password: this.password,
            name: this.userName
          })
        } else {
          await this.loginUser({
            email: this.email,
            password: this.password,
          })
        }
      }
    },
    props: {
      isSignin: Boolean
    },
    computed: {
      loginTitle() {
        return this.isSignin ? 'Регистрация' : 'Войти'
      },
      isNameValid(): boolean {
        return NAME_REGEX.test(this.userName)
      },
      isEmailValid(): boolean {
        return EMAIL_REGEX.test(this.email)
      },
      isPassValid(): boolean {
        return PASSWORD_REGEX.test(this.password)
      },
      passwordType ():string {
        return this.isPassVisible ? 'text': 'password'
      }
    }
  })
</script>


<template>
  <div class="container">
    <section class="login">
      <h1 class="login__title">{{ loginTitle }}</h1>
      <p v-if="!isSignin" class="login__text">Hовый пользователь? <RouterLink class="login__link" :to="AppRoute.Signin">Зарегистрируйтесь</RouterLink> прямо сейчас</p>
      <form method="post" @submit.prevent action="/">
        <div class="input-login">
          <template v-if="isSignin">
            <label for="name">Введите имя</label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="userName"
              autoComplete="off"
              required
            />
            <p v-if="userName.length === NULL_LENGTH" class="input-login__error">Заполните поле</p>
            <p v-if="!isNameValid" class="input-login__error">Длина имени должна составлять от 1 до 15 символов.</p>
          </template>
        </div>
        <div class="input-login">
          <label for="email">Введите e-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            autoComplete="off"
            required
          />
          <p v-if="email.length === NULL_LENGTH" class="input-login__error">Заполните поле</p>
          <p v-if="!isEmailValid" class="input-login__error">Должен быть указан валидный e-mail</p>
        </div>
        <div class="input-login">
          <label :for="`password${isSignin ? '' : 'Login'}`">{{isSignin ? 'Придумайте пароль' : 'Введите пароль'}}</label>
          <span>
            <input
              :type="passwordType"
              placeholder="• • • • • • • • • • • •"
              :id="`password${isSignin ? '' : 'Login'}`"
              name="password"
              v-model="password"
              autoComplete="off"
              required
            />
            <button class="input-login__button-eye" type="button" @click="changePassVisibility">
              <svg width="14" height="8" aria-hidden="true">
                <use href="#icon-eye"></use>
              </svg>
            </button>
          </span>
          <p v-if="password.length === NULL_LENGTH" class="input-login__error">Заполните поле</p>
          <p v-if="!isPassValid" class="input-login__error">Длина пароля должна составлять от 6 до 12 символов.</p>
        </div>
        <button
          class="button login__button button--medium"
          type="submit"
          :disabled="!(isEmailValid && isPassValid && isSignin === isNameValid)"
          @click="handleFormSubmit"
        >{{isSignin ? 'Зарегистрироваться' : 'Войти'}}</button>
      </form>
    </section>
  </div>
</template>
