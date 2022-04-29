import { Injectable } from '@angular/core';
import { User } from 'src/api/lib/models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user: User = null;
  public loggedInUser: boolean = true;
  public adminUser: boolean = true;

  constructor() { }

  isLoggedInUser() {
    return true;
  }

  isAdmin() {
    return true;
  }

  logOut() {
    this.loggedInUser = false;
  }
}
