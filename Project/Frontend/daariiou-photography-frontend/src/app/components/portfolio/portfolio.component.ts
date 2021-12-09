import { Component, HostListener, Injectable, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgDialogAnimationService } from "ng-dialog-animation";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {

  public innerWidth: number

  public gallery1 = [
    { id: "1", picture: "assets/20210421_065614.jpg", format: 0 },
    { id: "2", picture: "assets/DSC00150.jpg", format: 0 },
    { id: "3", picture: "assets/DSC00302.jpg", format: 0 },
    { id: "4", picture: "assets/DSC00370.jpg", format: 0 },
    { id: "5", picture: "assets/DSC00993.jpg", format: 1 },
    { id: "6", picture: "assets/DSC00845-3.jpg", format: 1 },
  ]

  public gallery2 = [
    { id: "7", picture: "assets/DSC00928-3.jpg", format: 1 },
    { id: "8", picture: "assets/DSC07337.jpg", format: 0 },
    { id: "9", picture: "assets/DSC07491-2.jpg", format: 0 },
    { id: "0", picture: "assets/DSC07609-2.jpg", format: 1 },
    { id: "1", picture: "assets/DSC08046.jpg", format: 0 }
  ]

  public gallery3 = [
    { id: "2", picture: "assets/DSC08825.jpg", format: 0 },
    { id: "3", picture: "assets/DSC08901.jpg", format: 1 },
    { id: "4", picture: "assets/DSC09047.jpg", format: 1 },
    { id: "5", picture: "assets/DSC09289.jpg", format: 1 },
    { id: "6", picture: "assets/DSC09592.jpg", format: 0 },
    { id: "1", picture: "assets/DSC09864.jpg", format: 0 }
  ]



  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }


  openPictureDialog(content, format: number) {
    if (this.innerWidth > 991) {
      if (format == 1) {
        this.modalService.open(content, { windowClass: "querformat" });
      } else {
        this.modalService.open(content, { centered: true });
      }
    } else {
      alert("Do hast ein zu kleinen Bildschirm")
    }
  }
}
