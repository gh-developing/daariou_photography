import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loggedInUser: boolean = true;
  public adminUser: boolean = false;

  constructor() { }

  isLoggedInUser() {
    return true;
  }

  isAdmin() {
    return false;
  }

  logOut() {
    this.loggedInUser = false;
  }
}
