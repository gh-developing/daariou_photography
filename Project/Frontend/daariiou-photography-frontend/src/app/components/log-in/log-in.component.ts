import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/api/lib/models';
import { UserService } from 'src/api/lib/services';
import { LoginService } from 'src/app/services/user.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  public user: User = {} as User
  constructor(public activeModal: NgbActiveModal, private readonly loginService: LoginService, private readonly userService: UserService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.userService.apiV1UserLoginGet$Json({ username: this.user.username, password: this.user.password }).subscribe((result) => {
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
