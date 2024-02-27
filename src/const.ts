export const AppRoute = {
  Login: '/login',
  Signin: '/signin',
  AddItem: '/addItem',
  EditItem: '/editItem',
  Error: '*',
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

export const STRINGS = [4, 6, 7, 12] as const;

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
