import { DEFAULT_PAGE_NUMBER, RequestStatus } from '@/const';
import { type RequestStatusType, type GuitarType } from '@/types';
import { guitarFormModule } from './guitar-form';
import { MutationTypes } from '../mutation-type';

export type GuitarsStateType = {
  guitars: GuitarType[];
  currentPage: number;
  totalPages: number;
  guitarsLoadingStatus: RequestStatusType;
  hasDataError: boolean;
  shouldUpdate: boolean;
}

export const guitarsModule = {
  namespaced: true,
  state: () => ({
    guitars: [],
    currentPage: DEFAULT_PAGE_NUMBER,
    totalPages: DEFAULT_PAGE_NUMBER,
    guitarsLoadingStatus: RequestStatus.Idle,
    hasDataError: false,
    shouldUpdate: false,
  }),
  getters: {
    selectGuitars: (state: GuitarsStateType) => state.guitars,
    selectCurrentPageNumber: (state: GuitarsStateType) => state.currentPage,
    selectTotalPagesNumber: (state: GuitarsStateType) => state.totalPages,
    selectGuitarsLoadingStatus: (state: GuitarsStateType) => state.guitarsLoadingStatus,
    selectGuitarsLoadingErrorStatus: (state: GuitarsStateType) => state.hasDataError,
    selectGuitarsShouldUpdateStatus: (state: GuitarsStateType) => state.shouldUpdate,
    selectGuitarItem (state: GuitarsStateType, {getters, state: formState} = guitarFormModule) {
      const {guitars} = state;
      const guitarId= getters.selectGuitarId(formState());
      return guitars.slice().filter(({id}) => id === guitarId)[0];
    }
  },
  mutations: {
    [MutationTypes.Guitars.LoadGuitars](state: GuitarsStateType, loadGuitars: GuitarType[]) {
      state.guitars = loadGuitars;
    },
    [MutationTypes.Guitars.UpdateCurrentPageNumber](state: GuitarsStateType, updatePage: number) {
      state.currentPage = updatePage;
    },
    [MutationTypes.Guitars.UpdateTotalPagesNumber](state: GuitarsStateType, updateTotalPages: number) {
      state.totalPages = updateTotalPages;
    },
    [MutationTypes.Guitars.ShouldGuitarsUpdate](state: GuitarsStateType, needUpdate: boolean) {
      state.shouldUpdate = needUpdate;
    },
    [MutationTypes.Guitars.SetGuitarsLoadingError](state: GuitarsStateType, error: boolean) {
      state.hasDataError = error;
    },
    [MutationTypes.Guitars.SetGuitarsLoadingStatus](state: GuitarsStateType, loadingStatus: RequestStatusType) {
      state.guitarsLoadingStatus = loadingStatus;
    },
  }
};
