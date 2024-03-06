import { createStore } from 'vuex';
import { guitarFormModule, guitarListModule, guitarsModule, userModule, errorModule } from '@/store/modules';
import { MutationTypes } from './mutation-type';
import { APIPath, AppRoute, AuthStatus, RequestStatus, TIMEOUT_SHOW_ERROR, ErrorMessage } from '@/const';
import { GuitarType, EntitiesWithPagination, GuitarsQuery, SigninType, UserType, AppRouteType, LoginType, LoggedUserType } from '@/types';
import { adaptGuitarsQueryToServer } from '@/helpers';
import router from '@/router';
import {setToken, removeToken } from '@/services/token.service'
import { createApi } from '@/services/api.service';

export type StoreType = typeof store;

const axiosApi = createApi();

const store = createStore({
  state: {
    isAuth: false,
  },
  actions: {
    async getGuitarForm ({commit}) {
      try {
        commit(`guitarForm/${MutationTypes.GuitarForm.SetGuitarFormLoadingStatus}`, RequestStatus.Pending);
        commit(`guitarForm/${MutationTypes.GuitarForm.SetGuitarFormError}`, false);
        const guitarId = guitarFormModule.getters.selectGuitarId;
        const {data} = await axiosApi.get<GuitarType>(`${APIPath.Guitars}/${guitarId}`);
        commit(`guitarForm/${MutationTypes.GuitarForm.FillGuitarFormData}`, data);
        commit(`guitarForm/${MutationTypes.GuitarForm.SetGuitarFormLoadingStatus}`, RequestStatus.Fulfilled);
      } catch (errorMessage) {
        commit(`guitarForm/${MutationTypes.GuitarForm.SetGuitarFormLoadingStatus}`, RequestStatus.Rejected);
        commit(`guitarForm/${MutationTypes.GuitarForm.SetGuitarFormError}`, true);
        this.dispatch('clearErrorAction', `${ErrorMessage.FailedGetGuitarForm}: ${errorMessage}`);
      }
    },
    async postGuitarForm ({commit}, guitarForm: GuitarType) {
      try {
        commit(`guitarForm/${MutationTypes.GuitarForm.SetGuitarFormLoadingStatus}`, RequestStatus.Pending);
        commit(`guitarForm/${MutationTypes.GuitarForm.SetGuitarFormError}`, false);
        await axiosApi.post<GuitarType>(APIPath.Guitars, guitarForm);
        commit(`guitars/${MutationTypes.Guitars.ShouldGuitarsUpdate}`, true);
        commit(`guitarForm/${MutationTypes.GuitarForm.SetGuitarFormLoadingStatus}`, RequestStatus.Fulfilled);
      } catch (errorMessage) {
        commit(`guitarForm/${MutationTypes.GuitarForm.SetGuitarFormLoadingStatus}`, RequestStatus.Rejected);
        commit(`guitarForm/${MutationTypes.GuitarForm.SetGuitarFormError}`, true);
        this.dispatch('clearErrorAction', `${ErrorMessage.FailedPostGuitarForm}: ${errorMessage}`);
      }
    },
    async loadGuitars({commit}, query: GuitarsQuery) {
      try {
        commit(`guitars/${MutationTypes.Guitars.SetGuitarsLoadingStatus}`, RequestStatus.Pending);
        commit(`guitars/${MutationTypes.Guitars.SetGuitarsLoadingError}`, false);
        const {data: {entities, totalPages, currentPage}} = await axiosApi.get<EntitiesWithPagination<GuitarType>>(APIPath.Guitars, {
          params : {...adaptGuitarsQueryToServer(query)}
        });
        commit(`guitars/${MutationTypes.Guitars.ShouldGuitarsUpdate}`, false);
        commit(`guitars/${MutationTypes.Guitars.LoadGuitars}`, entities);
        commit(`guitars/${MutationTypes.Guitars.UpdateCurrentPageNumber}`, currentPage);
        commit(`guitars/${MutationTypes.Guitars.UpdateTotalPagesNumber}`, totalPages);
        commit(`guitars/${MutationTypes.Guitars.SetGuitarsLoadingStatus}`, RequestStatus.Fulfilled);
      } catch (errorMessage) {
        commit(`guitars/${MutationTypes.Guitars.SetGuitarsLoadingStatus}`, RequestStatus.Rejected);
        commit(`guitars/${MutationTypes.Guitars.SetGuitarsLoadingError}`, true);
        this.dispatch('clearErrorAction', `${ErrorMessage.FailedLoadGuitars}: ${errorMessage}`);
      }
    },
    async updateGuitars({commit}, guitarForm: GuitarType) {
      try {
        const {id: guitarId} = guitarForm;
        await axiosApi.patch<GuitarType>(`${APIPath.Guitars}/${guitarId}`, guitarForm);
        commit(`guitars/${MutationTypes.Guitars.ShouldGuitarsUpdate}`, true);
      } catch (errorMessage) {
        this.dispatch('clearErrorAction', `${ErrorMessage.FailedUpdateGuitarForm}: ${errorMessage}`);
      }
    },
    async removeGuitars({commit}, guitarId: string) {
      try {
        await axiosApi.delete<void>(`${APIPath.Guitars}/${guitarId}`);
        commit(`guitars/${MutationTypes.Guitars.ShouldGuitarsUpdate}`, true);
      } catch (errorMessage) {
        this.dispatch('clearErrorAction', `${ErrorMessage.FailedDeleteGuitarForm}: ${errorMessage}`);
      }
    },
    async signinUser({commit}, newUser: SigninType) {
      try {
        await axiosApi.post<UserType>(APIPath.Signin, newUser);
        commit(`user/${MutationTypes.User.UpdateAuthStatus}`, AuthStatus.Auth);
        commit(`user/${MutationTypes.User.SetEmail}`, newUser.email);
        this.dispatch('redirect', AppRoute.Products);
      } catch (errorMessage) {
        commit(`user/${MutationTypes.User.UpdateAuthStatus}`, AuthStatus.NoAuth);
        this.dispatch('clearErrorAction', `${ErrorMessage.FailedUserSignin}: ${errorMessage}`);
      }
    },
    async authoriseUser({commit}) {
      try {
        const {data: {email}} = await axiosApi.post<UserType>(APIPath.Verify, {});
        commit(`user/${MutationTypes.User.UpdateAuthStatus}`, AuthStatus.Auth);
        commit(`user/${MutationTypes.User.SetEmail}`, email);
      } catch (errorMessage) {
        commit(`user/${MutationTypes.User.UpdateAuthStatus}`, AuthStatus.NoAuth);
        this.dispatch('clearErrorAction', `${ErrorMessage.UserUnauthorised}: ${errorMessage}`);
      }
    },
    async loginUser({commit}, loginUser: LoginType) {
      try {
        const {data: {accessToken}} = await axiosApi.post<LoggedUserType>(APIPath.Login, loginUser);
        setToken(accessToken);
        commit(`user/${MutationTypes.User.UpdateAuthStatus}`, AuthStatus.Auth);
        commit(`user/${MutationTypes.User.SetEmail}`, loginUser.email);
        this.dispatch('redirect', AppRoute.Products);
      } catch (errorMessage) {
        commit(`user/${MutationTypes.User.UpdateAuthStatus}`, AuthStatus.NoAuth);
        this.dispatch('clearErrorAction', `${ErrorMessage.FailedUserLogin}: ${errorMessage}`);
      }
    },
    logoutUser({commit}) {
      commit(`user/${MutationTypes.User.UpdateAuthStatus}`, AuthStatus.NoAuth);
      commit(`user/${MutationTypes.User.SetEmail}`, '');
      removeToken();
    },
    redirect(_, toRoute: AppRouteType) {
      router.push(toRoute)
    },
    clearErrorAction({commit}, errorMessage: string| null) {
      commit(`error/${MutationTypes.Error.SetError}`, errorMessage);
      setTimeout(() => commit(`error/${MutationTypes.Error.SetError}`, null), TIMEOUT_SHOW_ERROR);
    }

  },
  modules: {
    guitarForm: guitarFormModule,
    guitarList: guitarListModule,
    guitars: guitarsModule,
    user: userModule,
    error: errorModule
  }
})

export default store;
