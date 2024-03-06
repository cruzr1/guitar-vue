import { type AuthStatusType} from '@/types';
import { AuthStatus } from '@/const';
import { MutationTypes } from '../mutation-type';

export type UserStateType = {
  email: string;
  authStatus: AuthStatusType;
}

export const userModule = {
  namespaced: true,
  state: () => ({
    email: '',
    authStatus: AuthStatus.Unknown
  }),
  getters: {
    selectEmail: (state: UserStateType) => state.email,
    selectUserAuthStatus: (state: UserStateType) => state.authStatus,
  },
  mutations: {
    [MutationTypes.User.UpdateAuthStatus](state: UserStateType, updateStatus: AuthStatusType) {
      state.authStatus = updateStatus;
    },
    [MutationTypes.User.SetEmail](state: UserStateType, updateEmail: string) {
      state.email = updateEmail;
    }
  }
}
