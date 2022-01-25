import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'daariiou-photography-frontend';
  public isActive: boolean = false;

  status: boolean = false;
clickEvent(){
    this.status = !this.status;       
}
}