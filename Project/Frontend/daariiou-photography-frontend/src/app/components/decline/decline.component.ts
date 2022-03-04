import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Shooting } from 'src/api/lib/models';
import { ShootingService } from 'src/api/lib/services';

@Component({
  selector: 'app-decline',
  templateUrl: './decline.component.html',
  styleUrls: ['./decline.component.css']
})
export class DeclineComponent implements OnInit {

  @Input() public item: Shooting;

  constructor(public activeModal: NgbActiveModal, private readonly shootingService: ShootingService) { }

  ngOnInit() {
  }

  private isNullOrEmpty(string): boolean {
    var s = string.replace(" ", "");
    if (s == null || s == "") {
      return false;
    } return true;
  }

  decline() {
    if (this.isNullOrEmpty(this.item.reasonDeclined)) {
    this.shootingService.apiV1ShootingChangeStatusPut$Json({ status: 'Declined', body: this.item })
      .subscribe(
        (result) => {
          console.log(result);
        }
      ), (error) => {
        console.log(error)
      }
    }
  }

}
