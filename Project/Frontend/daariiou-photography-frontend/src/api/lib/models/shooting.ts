/* tslint:disable */
/* eslint-disable */
import { KindOfShooting } from './kind-of-shooting';
import { User } from './user';
export interface Shooting {
  date?: string;
  koS?: null | KindOfShooting;
  koSid?: number;
  rejected?: null | string;
  remarks?: null | string;
  sid?: number;
  uid?: number;
  uidNavigation?: null | User;
}
