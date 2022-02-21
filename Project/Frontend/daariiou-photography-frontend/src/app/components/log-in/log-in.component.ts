import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  public user: any = [{ id: 0, prename: null, lastname: null, username: null, password: null, confirmPassword: null }] as any;
  constructor(public activeModal: NgbActiveModal, private readonly loginService: UserService) { }

  ngOnInit(): void {
    
  }

  get() {}

  onSubmit() {
    console.table(this.user);
  }

  logIn(e: any) {
    if (!e.srcElement.checkValidity()) {
      e.srcElement.reportValidity();
      return false;
    } else {
      this.get();
      this.activeModal.close('Close click');
      this.loginService.loggedInUser = true
    }
  }

}
