import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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
