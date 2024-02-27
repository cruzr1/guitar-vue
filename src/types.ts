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
