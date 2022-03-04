/* tslint:disable */
/* eslint-disable */
import { Byte } from '@angular/compiler/src/util';
import { KindOfShooting } from './kind-of-shooting';
import { User } from './user';
export interface Picture {
  date?: string;
  isPublic?: null | string;
  koS?: null | KindOfShooting;
  koSid?: number;
  pid?: number;
  src?: null | Byte[];
  thumb?: null | string;
  uid?: null | number;
  uidNavigation?: null | User;
}
