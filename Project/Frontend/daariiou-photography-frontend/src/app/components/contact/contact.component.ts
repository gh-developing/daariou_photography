
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

  mailMe(){
    var mailText = 'mailto:d.passucci@gmx.ch?subject=' + this.user[0].question + ': ' + this.user[0].subject + '&body=' + this.user[0].body + '%0D%0A%0D%0AGruss%0D%0A' + this.user[0].name;
    window.location.href = mailText;
  }
}
