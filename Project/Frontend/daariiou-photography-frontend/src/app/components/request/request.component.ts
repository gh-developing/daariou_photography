import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeclineComponent } from '../decline/decline.component';

export class Request {
  public id: string;
  public status: string;
  public date: Date;
  public uname: string;
  public firstname: string;
  public lastname: string;
  public kindOfShooting: string;
  public remark: string;
  public reasonDeclined?: string;
}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})

export class RequestComponent implements OnInit {
  public unreadRequests: number = 2;
  public today: Date = new Date();
  public lastYear: Date = new Date();
  public nextYear: Date = new Date();
  public newRequests: any = {};
  public upCommingRequests: any = {};
  public pastRequests: any = {};
  public requests: Request[] = [
    {
      id: '1',
      status: 'Open',
      date: this.nextYear,
      uname: 'shxchxr.xx',
      firstname: 'Shachare',
      lastname: 'Alone',
      kindOfShooting: 'Studio',
      remark: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
    },
    {
      id: '2',
      status: 'In Progress',
      date: this.nextYear,
      uname: 'piriiii.s',
      firstname: 'Pairavaina',
      lastname: 'Selvaranian',
      kindOfShooting: 'Outdoor',
      remark: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
    },
    {
      id: '3',
      status: 'In Progress',
      date: this.nextYear,
      uname: 'piriiii.s',
      firstname: 'Pairavaina',
      lastname: 'Selvaranian',
      kindOfShooting: 'Studio',
      remark: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
    },
    {
      id: '4',
      status: 'Done',
      date: this.lastYear,
      uname: 'max.muster',
      firstname: 'Max',
      lastname: 'Muster',
      kindOfShooting: 'Mit Fahrzeugen',
      remark: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
    }
  ]

  constructor(private readonly modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.sorting()
  }

  decline(item: Request) {
    item.status = 'Declined'
    item.reasonDeclined = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
    var modal = this.modalService.open(DeclineComponent, { centered: true, size: 'md' });
    modal.componentInstance.item = item;
  }

  accept(item: Request) {
    item.status = 'In Progress'
  }
  setDone(item: Request) {
    item.status = 'Done'
  }
  sorting() {
    this.newRequests = this.requests.filter(r => r.status == 'Open')
    this.upCommingRequests = this.requests.filter(r => r.status == 'In Progress')
    this.pastRequests = this.requests.filter(r => r.status == 'Done')
  }
}
