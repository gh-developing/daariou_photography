import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PictureDialogComponent } from './picture-dialog/picture-dialog.component';
import { NgDialogAnimationService } from "ng-dialog-animation";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public gallery1 = [
    { id: "1", picture: "assets/20210421_065614.jpg" },
    { id: "2", picture: "assets/DSC00150.jpg" },
    { id: "3", picture: "assets/DSC00302.jpg" },
    { id: "4", picture: "assets/DSC00370.jpg" },
    { id: "5", picture: "assets/DSC00993.jpg" },
    { id: "6", picture: "assets/DSC00845-3.jpg" }
  ]

  public gallery2 = [
    { id: "7", picture: "assets/DSC00928-3.jpg" },
    { id: "8", picture: "assets/DSC07337.jpg" },
    { id: "9", picture: "assets/DSC07491-2.jpg" },
    { id: "0", picture: "assets/DSC07609-2.jpg" },
    { id: "1", picture: "assets/DSC08046.jpg" }
  ]

  public gallery3 = [
    { id: "2", picture: "assets/DSC08825.jpg" },
    { id: "3", picture: "assets/DSC08901.jpg" },
    { id: "4", picture: "assets/DSC09047.jpg" },
    { id: "5", picture: "assets/DSC09289.jpg" },
    { id: "6", picture: "assets/DSC09592.jpg" },
    { id: "1", picture: "assets/DSC09864.jpg" }
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPictureDialog(image: string) {
    var picture_width: number = +document.getElementById("picture" + image).offsetWidth;
    var picture_height: number = +document.getElementById("picture" + image).offsetHeight;
    if (picture_height < picture_width) {
      this.dialog.open(PictureDialogComponent, {width:'calc(100% / 2)', height: 'auto', data: { image: image }})
    }
    else {
      this.dialog.open(PictureDialogComponent, { width:'calc(100% / 3.5)', height: 'auto', data: { image: image } })
    }
    
  }

}

