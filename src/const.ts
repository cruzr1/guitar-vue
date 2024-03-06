import { GuitarType, StringsCountType } from './types';

export const AppRoute = {
  Login: '/login',
  Signin: '/signin',
  AddItem: '/addItem',
  EditItem: '/editItem',
  Error: '*',
  NotFound: '/:pathMatch(.*)*',
  Products: '/products',
  ProductId: '/products/:productId',
} as const;

export const GuitarCategory = {
  Acoustic: {
    id: 'guitar',
    filterId: 'acoustic'
  },
  Electric: {
    id: 'el-guitar',
    filterId: 'electric'
  },
  Ukulele: {
    id: 'ukulele',
    filterId: 'ukulele'
  },
} as const;

export const GUITAR_CATEGORIES = Object.values(GuitarCategory).map(({filterId}) => filterId);

export const GuitarNames = {
  [GuitarCategory.Acoustic.filterId]: 'Акустическая гитара',
  [GuitarCategory.Electric.filterId]: 'Электрогитара',
  [GuitarCategory.Ukulele.filterId]: 'Укулеле',
}

export const STRINGS: StringsCountType[] = [4, 6, 7, 12] as const;

export const RequestStatus = {
  Idle: 'idle',
  Pending: 'pending',
  Fulfilled: 'fulfilled',
  Rejected: 'rejected'
} as const;

export const mockGuitars = [
  {
    id: 1,
    description: 'dfdf',
    name: 'ljj;lj;l',
    createdAt: new Date('01-01-2024'),
    imageURL: 'j;j;ljk',
    article: 'jl;j;ljlj;l',
    stringsCount: 4,
    type: 'electric',
    price: 22343,
  },
  {
    id: 2,
    description: 'dfdf',
    name: 'ljj;lj;l',
    createdAt: new Date('02-02-2024'),
    imageURL: 'j;j;ljk',
    article: 'jl;j;ljlj;l',
    stringsCount: 7,
    type: 'electric',
    price: 56463,
  },
];

export const SortOrder = {
  Asc: 'asc',
  Desc: 'desc',
} as const;

export const SortOrderField = {
  Price: 'price',
  CreatedAt: 'createdAt'
} as const;

export const Networks = {
  Skype: {
    name: 'skype',
    website: 'https://www.skype.com/'
  },
  Vsco: {
    name: 'vsco',
    website: 'https://www.vsco.co/'
  },
  Pinterest: {
    name: 'pinterest',
    website: 'https://www.pinterest.com/'
  }
} as const;

export const EmptyItem: GuitarType = {
  id: '',
  name: '',
  description: '',
  createdAt: new Date(),
  imageURL: '',
  type: GuitarCategory.Electric.filterId,
  article: '',
  price: 0,
  stringsCount: STRINGS[0]
}

export const APIPath = {
  Guitars: '/guitar',
  GuitarId: '/guitar/:guitarId',
  Signin: 'user/signin',
  Login: 'user/login',
  Verify: 'user/check',
  Logout: 'user/logout',
} as const;

export const DEFAULT_PAGE_NUMBER = 1;

export const AuthStatus = {
  Auth: 'auth',
  NoAuth: 'unauth',
  Unknown: 'unknown'
} as const;

export const AUTH_TOKEN_KEY = 'token';

export const BASE_URL = 'http://localhost:3000/api';

export const REQUEST_TIMEOUT = 5000;

export const TIMEOUT_SHOW_ERROR = 5000;

export const ErrorMessage = {
  UserUnauthorised: 'User is unauthorised',
  FailedLoadGuitars: 'Failed to load guitars',
  FailedPostGuitarForm: 'Failed to add new guitar',
  FailedUpdateGuitarForm: 'Failed to update guitar data',
  FailedDeleteGuitarForm: 'Failed to delete guitar from list',
  FailedGetGuitarForm: 'Failed to get guitar from list',
  FailedUserLogout: 'Failed to log user out',
  FailedUserLogin: 'Failed to log user in',
  FailedUserSignin: 'Failed to sign user in',
} as const;

export const DEFAULT_IMAGE_PATH = 'markup/img/content/';
