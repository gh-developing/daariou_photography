import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-shooting',
  templateUrl: './new-shooting.component.html',
  styleUrls: ['./new-shooting.component.scss']
})
export class NewShootingComponent implements OnInit {
  public shooting: any = [{ id: 0, date: null, kindOfShooting: null, text: null }] as any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  newShooting() {
    
  }

  onSubmit() {
    console.table(this.shooting);
  }

}
