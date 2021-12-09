/* tslint:disable */
/* eslint-disable */
import { User } from './user';
export interface Picture {
  date?: string;
  img?: null | string;
  isPublic?: null | string;
  pid?: number;
  uid?: null | number;
  uidNavigation?: null | User;
}
