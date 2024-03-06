<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import { isStatusPending } from '@/helpers';

export default defineComponent ({
  name: 'LoadingView',
  computed: {
    ...mapState('guitars', [
      'guitarsLoadingStatus'
    ]),
    isDataLoading() {
      return isStatusPending(this.guitarsLoadingStatus);
    }
  }
})
</script>


<template>
  <div class="spinner-container " >
      <div class="spinner"></div>
      <div class="text">Пожалуйста подождите . {{isDataLoading ? 'Идет загрузка данных...' : 'Идет авторизация...'}}</div>
    </div>
</template>

<style scoped>
.spinner-container {
  position: fixed;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
}

.spinner {
  margin: 0 auto 20px auto;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #000;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
