import { DEFAULT_PAGE_NUMBER, RequestStatus } from '@/const';
import { type GuitarsQuery, type RequestStatusType } from '@/types';

export const adaptImage = (imageURL?: string) => imageURL?.split('.').join('@2x.');


export const adaptGuitarsQueryToServer = (query: GuitarsQuery) => {
  return {
    type: query.type?.join(','),
    stringsCount: query.stringsCount?.join(','),
    page: query.page || DEFAULT_PAGE_NUMBER,
    sortByField: query.sortByField || 'createdAt',
    sortByOrder: query.sortByOrder || 'asc'
  }
}

export const isStatusPending = (status: RequestStatusType) => status === RequestStatus.Pending;

export const isStatusFulfilled = (status: RequestStatusType) => status === RequestStatus.Fulfilled;

export const isStatusRejected = (status: RequestStatusType) => status === RequestStatus.Rejected;
