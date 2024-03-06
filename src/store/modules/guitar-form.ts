import { type GuitarCategoryType, type StringsCountType, type RequestStatusType, type GuitarType } from '@/types';
import { GuitarCategory, STRINGS, RequestStatus } from '@/const';
import { MutationTypes} from '../mutation-type';


export type GuitarFormStateType = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  imageURL: string;
  type: GuitarCategoryType;
  stringsCount: StringsCountType
  article: string,
  price: number;
  guitarFormLoadingStatus: RequestStatusType;
  hasGuitarFormError: boolean;
}

export const guitarFormModule = {
  namespaced: true,
  state: (): GuitarFormStateType => ({
    id: '',
    name: '',
    description: '',
    createdAt: '',
    imageURL: '',
    type: GuitarCategory.Electric.filterId,
    stringsCount: STRINGS[0],
    article: '',
    price: 0,
    guitarFormLoadingStatus: RequestStatus.Idle,
    hasGuitarFormError: false
  }),
  getters: {
    selectGuitarDetailsLoadingStatus: (state: GuitarFormStateType) => state.guitarFormLoadingStatus,
    selectGuitarDetailsLoadingErrorStatus: (state: GuitarFormStateType) => state.hasGuitarFormError,
    selectGuitarId: (state: GuitarFormStateType) => state.id,
    selectGuitarName: (state: GuitarFormStateType) => state.name,
    selectGuitarDescription: (state: GuitarFormStateType) => state.description,
    selectGuitarCreatedDate: (state: GuitarFormStateType) => state.createdAt,
    selectGuitarImageURL: (state: GuitarFormStateType) => state.imageURL,
    selectGuitarCategoryType: (state: GuitarFormStateType) => state.type,
    selectGuitarStringsCount: (state: GuitarFormStateType) => state.stringsCount,
    selectGuitarArticle: (state: GuitarFormStateType) => state.article,
    selectGuitarPrice: (state: GuitarFormStateType) => state.price,
    selectGuitarFormError: (state: GuitarFormStateType) => state.hasGuitarFormError,
    selectGuitarForm (state: GuitarFormStateType): GuitarType {
      const {id, name, description, createdAt, imageURL, type, stringsCount, article, price} = state;
      return {
        id,
        name,
        description,
        createdAt: new Date(createdAt),
        imageURL,
        type,
        stringsCount,
        article,
        price
      }
    }
  },
  mutations: {
    [MutationTypes.GuitarForm.SetGuitarId](state: GuitarFormStateType, id: string) {
      state.id = id;
    },
    [MutationTypes.GuitarForm.SetArticle](state: GuitarFormStateType, article: string) {
      state.article = article;
    },
    [MutationTypes.GuitarForm.SetGuitarCategoryName](state: GuitarFormStateType, type: GuitarCategoryType) {
      state.type = type;
    },
    [MutationTypes.GuitarForm.SetGuitarCreatedDate](state: GuitarFormStateType, createdAt: string) {
      state.createdAt = createdAt;
    },
    [MutationTypes.GuitarForm.SetGuitarImageURL](state: GuitarFormStateType, imageURL: string) {
      state.imageURL = imageURL;
    },
    [MutationTypes.GuitarForm.SetGuitarDescription](state: GuitarFormStateType, description: string) {
      state.description = description;
    },
    [MutationTypes.GuitarForm.SetPrice](state: GuitarFormStateType, price: string) {
      state.price = parseInt(price, 10) || 0;
    },
    [MutationTypes.GuitarForm.SetGuitarName](state: GuitarFormStateType, name: string) {
      state.name = name;
    },
    [MutationTypes.GuitarForm.SetStringsCount](state: GuitarFormStateType, stringsCount: StringsCountType) {
      state.stringsCount = stringsCount;
    },
    [MutationTypes.GuitarForm.SetGuitarFormLoadingStatus](state: GuitarFormStateType, status: RequestStatusType) {
      state.guitarFormLoadingStatus = status;
    },
    [MutationTypes.GuitarForm.SetGuitarFormError](state: GuitarFormStateType, status: boolean) {
      state.hasGuitarFormError = status;
    },
    [MutationTypes.GuitarForm.FillGuitarFormData](state: GuitarFormStateType, guitarForm: GuitarType) {
      state.id = guitarForm.id;
      state.name = guitarForm.name;
      state.description = guitarForm.description;
      state.imageURL = guitarForm.imageURL;
      state.type = guitarForm.type;
      state.stringsCount = guitarForm.stringsCount;
      state.article = guitarForm.article;
      state.price = guitarForm.price;
      state.guitarFormLoadingStatus = RequestStatus.Idle;
      state.hasGuitarFormError = false;
    },
    [MutationTypes.GuitarForm.ResetGuitarFormData](state: GuitarFormStateType) {
      state.id = '';
      state.name = '';
      state.description = '';
      state.createdAt = '';
      state.imageURL = '';
      state.type = GuitarCategory.Electric.filterId;
      state.stringsCount = STRINGS[0];
      state.article = '';
      state.price = 0;
      state.guitarFormLoadingStatus = RequestStatus.Idle;
      state.hasGuitarFormError = false;
    },
  }
}
