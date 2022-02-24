/* tslint:disable */
/* eslint-disable */
import { PictureDto } from './picture-dto';
import { ShootingDto } from './shooting-dto';
export interface UserDto {
  isAdmin?: null | string;
  lastname?: null | string;
  name?: null | string;
  password?: null | string;
  pictures?: null | Array<PictureDto>;
  shootings?: null | Array<ShootingDto>;
  uid?: number;
  username?: null | string;
}
