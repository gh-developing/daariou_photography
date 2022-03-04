/* tslint:disable */
/* eslint-disable */
import { KindOfShooting } from './kind-of-shooting';
import { User } from './user';
export interface PictureDto {
  date?: string;
  isPublic?: null | string;
  koS?: null | KindOfShooting;
  koSid?: number;
  pid?: number;
  src?: null | any;
  thumb?: null | string;
  uid?: null | number;
  uidNavigation?: null | User;
}
