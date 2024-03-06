export const MutationTypes = {
  GuitarForm: {
    SetGuitarId: 'SetGuitarId',
    SetGuitarName: 'SetGuitarName',
    SetGuitarDescription: 'SetGuitarDecription',
    SetGuitarCreatedDate: 'SetGuitarCreatedDate',
    SetGuitarImageURL: 'SetGuitarImageURL',
    SetGuitarCategoryName: 'SetGuitarCategoryName',
    SetStringsCount: 'SetStringsCount',
    SetGuitarFormError: 'SetGuitarFormError',
    SetArticle: 'SetArticle',
    SetPrice: 'SetPrice',
    FillGuitarFormData: 'FillGuitarFormData',
    ResetGuitarFormData: 'ResetGuitarFormData',
    SetGuitarFormLoadingStatus: 'SetGuitarFormLoadingStatus'
  },
  GuitarList: {
    UpdateGuitarTypeFilter: 'updateGuitarTypeFilter',
    UpdateStringsCountFilter: 'updateStringsCountFilter',
    UpdateSortOrder: 'updateSortOrder',
    UpdateSortField: 'updateSortField',
    ResetFilter: 'resetFilter'
  },
  Guitars: {
    LoadGuitars: 'loadGuitars',
    UpdateCurrentPageNumber: 'updateCurrentPageNumber',
    UpdateTotalPagesNumber: 'updateTotalPagesNumber',
    ShouldGuitarsUpdate: 'shouldGuitarsUpdate',
    SetGuitarsLoadingError: 'SetGuitarsLoadingError',
    SetGuitarsLoadingStatus: 'SetGuitarsLoadingStatus'
  },
  User: {
    UpdateAuthStatus: 'updateAuthStatus',
    SetEmail: 'setEmail'
  },
  Error: {
    SetError: 'SetError'
  }
} as const;
