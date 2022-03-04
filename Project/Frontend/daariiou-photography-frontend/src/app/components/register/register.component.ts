import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { last } from 'rxjs';
import { User } from 'src/api/lib/models';
import { UserService } from 'src/api/lib/services';
import { LoginService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public newUser: User = {
    isAdmin: "0",
    lastname: "",
    name: "",
    password: "",
    pictures: null,
    shootings: null,
    username: "",
  } as User;

  public confirmPassword: string;
  constructor(public activeModal: NgbActiveModal, private readonly userService: UserService, private readonly loginService: LoginService) { }

  ngOnInit() {
    console.log(this.newUser)
  }

  private isNullOrEmpty(s): boolean {
    if (s == null || s == "") {
      return false;
    } return true;
  }

  onSubmit() {
    if (this.isNullOrEmpty(this.newUser.lastname) &&
    this.isNullOrEmpty(this.newUser.name) &&
    this.isNullOrEmpty(this.newUser.password) &&
    this.isNullOrEmpty(this.newUser.username) &&
    this.isNullOrEmpty(this.confirmPassword)) {
      console.log("IM IN")
      if (this.confirmPassword == this.newUser.password) {
        console.log("IM IN1")
        this.userService.apiV1UserRegisterPost$Json({ body: this.newUser })
          .subscribe(
            (result) => {
              console.log(result)
              if (result != null) {
                console.log("IM IN2")
                this.loginService.loggedInUser = true;
                this.loginService.user = result;
                this.activeModal.close();
              } else {
                console.log("NAH")
              }
            },
            (error) => {
              console.log(error);
            }
          );
      } else { console.log("NOPE")}
    } else {
      console.log("IM OUT")
    }
  }
}