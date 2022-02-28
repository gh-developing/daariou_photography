import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/api/lib/services/user.service';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.sass']
})
export class DeleteProfileComponent implements OnInit {
  @Input() public userToDelete;

  constructor(public activeModal: NgbActiveModal, private readonly userService: UserService) { }

  ngOnInit() {
  }

  delete() {
    this.userService.apiV1UserDeleteDelete$Json({body: this.userToDelete}).subscribe(
      (result) => {
        console.log(result)
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
