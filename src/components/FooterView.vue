<script lang="ts">
  import { defineComponent } from 'vue';
  import { AppRoute, Networks } from '@/const';

  const FOOTER_LINKS = [ 'Где купить,', 'Блог', 'Вопрос-ответ', 'Возврат', 'Сервис-центры'];

  export default defineComponent({
    name: 'FooterView',
    data() {
      return {
        AppRoute,
        Networks,
        FOOTER_LINKS
      }
    }
  })

</script>


<template>
  <footer class="footer">
      <div class="container">
        <div class="footer__container">
          <div class="footer__logo-wrapper"><RouterLink class="footer__logo logo" :to="AppRoute.Login"><img class="logo__img" width="70" height="70" src="/markup/img/svg/logo.svg" alt="Логотип"/></RouterLink>
            <div class="socials footer__socials">
              <ul class="socials__list">
                <template v-for="{name, website} in Networks" :key="name">
                  <li class="socials-item"><a class="socials__link" :href="website" :aria-label="`Мы в ${name}`">
                  <svg class="socials__icon" width="24" height="24" aria-hidden="true">
                    <use :href="`#icon-${name}`"></use>
                  </svg></a></li>
                </template>
              </ul>
            </div>
          </div>
          <section class="footer__nav-section footer__nav-section--about">
            <h2 class="footer__nav-title footer__nav-title--about">О нас</h2>
            <p class="footer__nav-text footer__nav-text--about">Магазин гитар, музыкальных <br/> инструментов и&nbsp;гитарная мастерская в&nbsp;Санкт-Петербурге.</p>
            <p class="footer__nav-text footer__nav-text--about">Все инструменты проверены, отстроены и&nbsp;доведены до&nbsp;идеала!</p>
          </section>
          <section class="footer__nav-section footer__nav-section--links">
            <h2 class="footer__nav-title footer__nav-title--links">Информация</h2>
            <ul class="footer__nav-list">
              <template v-for="link in FOOTER_LINKS" :key="link">
                <li class="footer__nav-list-item"><RouterLink class="link footer__nav-link" to='#'>{{link}}</RouterLink></li>
              </template>
            </ul>
          </section>
          <section class="footer__nav-section footer__nav-section--contacts">
            <h2 class="footer__nav-title footer__nav-title--contacts">Контакты</h2>
            <p class="footer__nav-text footer__nav-text--address">г. Санкт-Петербург,<br/> м. Невский проспект, ул. Казанская 6.</p><RouterLink class="link footer__nav-link footer__nav-link--phone" to="tel:88125005050">8-812-500-50-50</RouterLink>
            <p class="footer__nav-text footer__nav-text--work-hours-title">Режим работы:<span class="footer__nav-text footer__nav-text--work-hours">с 11:00 до 20:00</span></p>
            <p class="footer__nav-text footer__nav-text--weekends">без выходных</p>
          </section>
        </div>
      </div>
    </footer>
</template>
