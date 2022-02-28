import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/api/lib/models';
import { UserService } from 'src/api/lib/services';
import { LoginService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public newUser: User = {} as User;
  public newConfirmPassword: string;
  public newPassword: string;
  constructor(public activeModal: NgbActiveModal, private readonly userService: UserService, private readonly loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.apiV1UserRegisterPost$Json({body: this.newUser})
    .subscribe(
      (result) => {
        console.log(result)
        this.loginService.loggedInUser = true;
        this.loginService.user = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}