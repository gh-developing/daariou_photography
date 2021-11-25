import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'daariiou-photography-frontend';
  public toggleActive: boolean = false;

  changeToggleActive() {
    if (this.toggleActive == true) {
      this.toggleActive = false;
      this.toggle();
    } else {
      this.toggleActive = true;
      this.toggle();
    }
  }

  toggle() {
    if (this.toggleActive == true) {
      document.getElementById("toggle").classList.add("toggler");
    }
    if (this.toggleActive == false) {
      if (document.getElementById("toggle").classList.contains("toggler") == true) {
        document.getElementById("toggle").classList.remove("toggler");
      }
    }
  }
}