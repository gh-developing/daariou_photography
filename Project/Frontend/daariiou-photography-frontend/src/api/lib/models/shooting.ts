/* tslint:disable */
/* eslint-disable */
import { KindOfShooting } from './kind-of-shooting';
import { User } from './user';
export interface Shooting {
  date?: string;
  kos?: null | KindOfShooting;
  kosId?: number;
  reasonDeclined?: null | string;
  remarks?: null | string;
  sid?: number;
  status?: null | string;
  uid?: number;
  uidNavigation?: null | User;
}
