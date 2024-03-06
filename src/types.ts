import { AppRoute, RequestStatus } from '@/const';

export type AppRouteType = typeof AppRoute[keyof typeof AppRoute];

export type GuitarCategoryType = 'acoustic' | 'electric' | 'ukulele';

export type RequestStatusType = typeof RequestStatus[keyof typeof RequestStatus];

export type StringsCountType = 4 | 6 | 7 | 12;

export type GuitarType = {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  imageURL: string;
  type: GuitarCategoryType;
  article: string,
  price: number;
  stringsCount: StringsCountType
}

export type SortOrderType = 'asc' | 'desc';

export type SortOrderFieldType = 'price' | 'createdAt';

export type EntitiesWithPagination<T> = {
  entities: T[];
  totalPages: number;
  currentPage: number;
}

export type GuitarsQuery = {
  type?: GuitarCategoryType[];
  stringsCount?: StringsCountType[];
  page?: number;
  sortByField?: SortOrderFieldType;
  sortByOrder?: "asc" | "desc";
}

export type AuthStatusType = 'auth' | 'unauth' | 'unknown';

export type UserType = {
  name: string;
  email: string;
}

export type LoginType = Pick<UserType, 'email'> & Record<'password', string>;

  export type SigninType = UserType & Record<'password', string>;

  export type LoggedUserType = {
    accessToken: string;
  }
