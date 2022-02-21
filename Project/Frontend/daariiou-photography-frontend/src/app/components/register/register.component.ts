import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public newUser: any = [{ id: 0, prename: null, lastname: null, username: null, password: null, confirmPassword: null }] as any;
  constructor(public activeModal: NgbActiveModal, private readonly loginService: UserService) { }

  ngOnInit() {
  }

  create() {}

  register(e: any) {
    console.log(this.newUser)
  }

  onSubmit() {
    console.table(this.newUser);
  }
}