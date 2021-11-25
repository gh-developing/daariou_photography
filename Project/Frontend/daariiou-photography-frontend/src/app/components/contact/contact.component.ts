
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor() {}
  public user = [{question: null, name: null, email: null, subject: null, body: null}]

  ngOnInit(): void {
  }
}
