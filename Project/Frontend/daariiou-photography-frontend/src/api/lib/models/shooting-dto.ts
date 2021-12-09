/* tslint:disable */
/* eslint-disable */
import { KindOfShooting } from './kind-of-shooting';
import { User } from './user';
export interface ShootingDto {
  date?: string;
  koS?: null | KindOfShooting;
  koSid?: number;
  rejected?: null | string;
  remarks?: null | string;
  sid?: number;
  'u'?: null | User;
  uid?: number;
}
