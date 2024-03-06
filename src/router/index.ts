import { createRouter, createWebHistory } from 'vue-router'
import LoginViewVue from '@/views/LoginView.vue'
import SigninViewVue from '@/views/SigninView.vue'
import { AppRoute } from '@/const'
import AddItemViewVue from '@/views/AddItemView.vue'
import EditItemViewVue from '@/views/EditItemView.vue'
import ProductViewVue from '@/views/ProductView.vue'
import ProductListViewVue from '@/views/ProductListView.vue'
import ErrorPageViewVue from '@/views/ErrorPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LoginViewVue
    },
    {
      path: AppRoute.Login,
      name: 'LoginPageView',
      component: LoginViewVue
    },
    {
      path: AppRoute.Signin,
      name: 'SigninPageView',
      component: SigninViewVue
    },
    {
      path: AppRoute.AddItem,
      name: 'AddItemView',
      component: AddItemViewVue
    },
    {
      path: AppRoute.EditItem,
      name: 'EditItemView',
      component: EditItemViewVue
    },
    {
      path: AppRoute.Products,
      name: 'ProductListView',
      component: ProductListViewVue
    },
    {
      path: AppRoute.ProductId,
      name: 'ProductView',
      component: ProductViewVue
    },
    {
      path: AppRoute.NotFound,
      name: 'ErrorPageView',
      component: ErrorPageViewVue
    }
  ]
})


export default router
