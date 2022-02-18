import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-decline',
  templateUrl: './decline.component.html',
  styleUrls: ['./decline.component.css']
})
export class DeclineComponent implements OnInit {

  @Input() public item;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  decline() {
    console.log(this.item)
  }

}
