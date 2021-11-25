import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public five = "#five"

  public gallery1 = [
    { id: "1", picture: "assets/20210421_065614.jpg" },
    { id: "2", picture: "assets/DSC00150.jpg" },
    { id: "3", picture: "assets/DSC00302.jpg" },
    { id: "4", picture: "assets/DSC00370.jpg" },
    { id: "5", picture: "assets/DSC00993.jpg" },
    { id: "6", picture: "assets/DSC00845-3.jpg" },
    { id: "7", picture: "assets/DSC00928-3.jpg" },
    { id: "8", picture: "assets/DSC07337.jpg" },
    { id: "9", picture: "assets/DSC07491-2.jpg" },
    { id: "0", picture: "assets/DSC07609-2.jpg" },
    { id: "1", picture: "assets/DSC08046.jpg" },
    { id: "2", picture: "assets/DSC08825.jpg" },
    { id: "3", picture: "assets/DSC08901.jpg" },
    { id: "4", picture: "assets/DSC09047.jpg" },
    { id: "5", picture: "assets/DSC09289.jpg" },
    { id: "6", picture: "assets/DSC09592.jpg" },
    { id: "1", picture: "assets/DSC09864.jpg" },
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.gallery1[1].id)
  }

}
