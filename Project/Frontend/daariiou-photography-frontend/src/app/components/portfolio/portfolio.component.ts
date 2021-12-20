import { Component, HostListener, Injectable, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {

  public innerWidth: number

  public gallery1: any = [
    { id: "1", picture: "assets/20210421_065614.jpg", format: 0 },
    { id: "2", picture: "assets/DSC00150.jpg", format: 0 },
    { id: "3", picture: "assets/DSC00302.jpg", format: 0 },
    { id: "4", picture: "assets/DSC00370.jpg", format: 0 },
    { id: "5", picture: "assets/DSC00993.jpg", format: 1 },
    { id: "6", picture: "assets/DSC00845-3.jpg", format: 1 },
    { id: "7", picture: "assets/DSC00928-3.jpg", format: 1 }
  ];

  public gallery2: any = [
    { id: "9", picture: "assets/DSC01600.jpg", format: 1 },
    { id: "10", picture: "assets/DSC01617.jpg", format: 0 },
    { id: "11", picture: "assets/DSC01642.jpg", format: 0 },
    { id: "12", picture: "assets/DSC09390.jpg", format: 1 },
    { id: "13", picture: "assets/DSC09391.jpg", format: 1 },
    { id: "14", picture: "assets/DSC07337.jpg", format: 0 },
    { id: "15", picture: "assets/DSC07491-2.jpg", format: 0 },
    { id: "16", picture: "assets/DSC09871.jpg", format: 1 }
  ];

  public gallery3: any = [
    { id: "17", picture: "assets/DSC07609-2.jpg", format: 1 },
    { id: "18", picture: "assets/DSC08046.jpg", format: 0 },
    { id: "19", picture: "assets/DSC08825.jpg", format: 0 },
    { id: "20", picture: "assets/DSC08901.jpg", format: 1 },
    { id: "21", picture: "assets/DSC09047.jpg", format: 1 },
    { id: "22", picture: "assets/DSC09289.jpg", format: 1 },
    { id: "23", picture: "assets/DSC09592.jpg", format: 0 },
    { id: "24", picture: "assets/DSC09392.jpg", format: 1 }
  ];

  public gallery4: any = [
    { id: "25", picture: "assets/DSC09393.jpg", format: 1 },
    { id: "26", picture: "assets/DSC09864.jpg", format: 0 },
    { id: "27", picture: "assets/DSC08082.jpg", format: 1 },
    { id: "28", picture: "assets/DSC08108.jpg", format: 0 },
    { id: "29", picture: "assets/DSC08485.jpg", format: 1 },
    { id: "30", picture: "assets/DSC08550.jpg", format: 1 },
    { id: "31", picture: "assets/DSC09839.jpg", format: 1 },
    { id: "8", picture: "assets/DSC01539.jpg", format: 0 }
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
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
