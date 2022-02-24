/* tslint:disable */
/* eslint-disable */
import { Picture } from './picture';
import { Shooting } from './shooting';
export interface User {
  isAdmin?: null | string;
  lastname?: null | string;
  name?: null | string;
  password?: null | string;
  pictures?: null | Array<Picture>;
  shootings?: null | Array<Shooting>;
  uid?: number;
  username?: null | string;
}
