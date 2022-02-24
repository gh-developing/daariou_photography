/* tslint:disable */
/* eslint-disable */
import { Picture } from './picture';
import { Shooting } from './shooting';
export interface KindOfShooting {
  koSid?: number;
  name?: null | string;
  pictures?: null | Array<Picture>;
  shootings?: null | Array<Shooting>;
}
