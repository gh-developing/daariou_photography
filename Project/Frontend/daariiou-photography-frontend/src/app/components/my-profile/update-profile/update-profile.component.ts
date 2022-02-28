import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/api/lib/services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.sass']
})
export class UpdateProfileComponent implements OnInit {
  @Input() public userToUpdate;
  public changePassword: boolean = false;

  constructor(public activeModal: NgbActiveModal, private readonly userService: UserService) { }

  ngOnInit() {
  }

  delete() {
    this.userService.apiV1UserEditPut$Json({body: this.userToUpdate, isPasswordChanged: this.changePassword}).subscribe(
      (result) => {
        console.log(result)
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
