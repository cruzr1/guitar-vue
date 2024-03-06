import { type GuitarCategoryType, type StringsCountType, type SortOrderType, type SortOrderFieldType } from '@/types';
import {DEFAULT_PAGE_NUMBER, GUITAR_CATEGORIES, STRINGS, SortOrder, SortOrderField } from '@/const';
import { MutationTypes } from '../mutation-type';
import store from '..';

export type GuitarListStateType = {
  guitarTypeFilter: GuitarCategoryType[];
  stringsCountFilter: StringsCountType[];
  activeSortOrder: SortOrderType;
  activeSortField: SortOrderFieldType;
}


export const guitarListModule = {
  namespaced: true,
  state: (): GuitarListStateType => ({
    guitarTypeFilter: GUITAR_CATEGORIES,
    stringsCountFilter: STRINGS,
    activeSortOrder: SortOrder.Asc,
    activeSortField: SortOrderField.CreatedAt,
  }),
  getters: {
    selectGuitarTypeFilter: (state: GuitarListStateType) => state.guitarTypeFilter,
    selectActiveSortOrder: (state: GuitarListStateType) => state.activeSortOrder,
    selectActiveSortField: (state: GuitarListStateType) => state.activeSortField,
    selectStringsCountFilter: (state: GuitarListStateType) => state.stringsCountFilter,
  },
  mutations: {
    [MutationTypes.GuitarList.ResetFilter](state: GuitarListStateType) {
      state.guitarTypeFilter = GUITAR_CATEGORIES,
      state.stringsCountFilter = STRINGS,
      state.activeSortOrder = SortOrder.Asc,
      state.activeSortField = SortOrderField.CreatedAt
    },
    [MutationTypes.GuitarList.UpdateGuitarTypeFilter](state: GuitarListStateType, guitarType: GuitarCategoryType) {
      state.guitarTypeFilter.includes(guitarType) ?
      state.guitarTypeFilter = state.guitarTypeFilter
      .filter((type) => type !== guitarType) :
      state.guitarTypeFilter.push(guitarType);
      store.commit(`guitars/${MutationTypes.Guitars.UpdateCurrentPageNumber}`, DEFAULT_PAGE_NUMBER);
    },
    [MutationTypes.GuitarList.UpdateSortField](state: GuitarListStateType, sortField: SortOrderFieldType ) {
      state.activeSortField = sortField;
      store.commit(`guitars/${MutationTypes.Guitars.UpdateCurrentPageNumber}`, DEFAULT_PAGE_NUMBER);

    },
    [MutationTypes.GuitarList.UpdateSortOrder](state: GuitarListStateType, sortOrder: SortOrderType) {
      state.activeSortOrder = sortOrder;
      store.commit(`guitars/${MutationTypes.Guitars.UpdateCurrentPageNumber}`, DEFAULT_PAGE_NUMBER);
    },
    [MutationTypes.GuitarList.UpdateStringsCountFilter](state: GuitarListStateType, stringsCount: StringsCountType) {
      state.stringsCountFilter.includes(stringsCount) ?
      state.stringsCountFilter = state.stringsCountFilter.filter((count) => count != stringsCount) :
      state.stringsCountFilter.push(stringsCount);
      store.commit(`guitars/${MutationTypes.Guitars.UpdateCurrentPageNumber}`, DEFAULT_PAGE_NUMBER);
    }
  }
}


