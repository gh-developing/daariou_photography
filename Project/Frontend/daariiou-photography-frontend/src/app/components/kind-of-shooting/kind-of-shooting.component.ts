import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kind-of-shooting',
  templateUrl: './kind-of-shooting.component.html',
  styleUrls: ['./kind-of-shooting.component.scss']
})
export class KindOfShootingComponent implements OnInit {

  constructor() { }
  public isBigScreen = true;

  ngOnInit(): void {
    var inner: number = window.innerWidth;
    if (inner < 765) {
      this.isBigScreen = false;
    } else {
      this.isBigScreen = true;
    }
  }

}
