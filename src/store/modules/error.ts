import { MutationTypes } from '../mutation-type';

export type ErrorStateType = {
  error: string | null;
};

export const errorModule = {
  state: () => ({
    error: null,
  }),
  getters: {
    selectError: (state: ErrorStateType) => state.error
  },
  mutations: {
    [MutationTypes.Error.SetError](state: ErrorStateType, errorMessage: string | null) {
      state.error = errorMessage;
    }
  },
  namespaced: true
};
