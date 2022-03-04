import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, ChangeDetectionStrategy, OnInit, ViewEncapsulation } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { LightGallery } from 'lightgallery/lightgallery';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { Lightbox } from 'ngx-lightbox';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { NewShootingComponent } from '../new-shooting/new-shooting.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

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
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyProfileComponent implements OnInit {

  private lightGallery!: LightGallery;
  private needRefresh = false;
  private subscriptions = new Subscription();

  public album: any[] = [] as any[];
  public gallery1: any[] = [] as any[];
  public gallery2: any[] = [] as any[];
  public gallery3: any[] = [] as any[];
  public gallery4: any[] = [] as any[];
  // public pictureList: PictureList = new PictureList;
  public today: Date = new Date();
  public lastYear: Date = new Date();
  public nextYear: Date = new Date();
  public declinedShootings: any = {};
  public myUpCommingShootings: any = {};
  public pastShootings: any = {};
  public myShootings: Request[] = [
    {
      id: '1',
      status: 'Declined',
      date: this.lastYear,
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
  ];
  public settings = {
    counter: false,
    plugins: [lgZoom]
  };

  constructor(private readonly modalService: NgbModal) { }
  
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }

  onInit = (detail): void => {
    this.lightGallery = detail.instance;
  };

  ngOnDestroy = () => this.subscriptions.unsubscribe();

  ngOnInit(): void {
    this.splitAlbumIntoGal();
    this.sorting();
  }

  openNewShootingDialog() {
    this.modalService.open(NewShootingComponent)
  }

  setDone(item: Request) {
    item.status = 'Done'
  }
  sorting() {
    this.myUpCommingShootings = this.myShootings.filter(r => r.status == 'In Progress')
    this.pastShootings = this.myShootings.filter(r => r.status == 'Done')
    this.declinedShootings = this.myShootings.filter(r => r.status == 'Declined')
  }

  openModal(component: string) {
    switch (component) {
      case 'update':
        this.modalService.open(UpdateProfileComponent, { centered: true, size: 'md' })
        break;
      case 'delete':
        this.modalService.open(DeleteProfileComponent, { centered: true, size: 'sm' })
        break;
      case 'new-shooting':
        this.modalService.open(NewShootingComponent, { centered: true, size: 'md' })
        break;
    }
  }

  splitAlbumIntoGal() {
    this.album //= this.pictureList.pictures.filter(kos => kos.kindOfShooting == 1).slice(0, 12);
    console.log(this.album)
    var countOfPictures = this.album.length;
    var gal1and4 = Math.floor(countOfPictures / 4)
    var gal2and3 = Math.ceil(countOfPictures - ((countOfPictures / 4) * 3));

    var i = 0
    var gal1 = 0
    var gal2 = 0
    var gal3 = 0
    var gal4 = 0

    for (i; i < gal1and4; i++) {
      this.gallery1[gal1] = (this.album[i]);
      gal1++;
    }

    for (i; i < gal2and3 + gal1and4; i++) {
      this.gallery2[gal2] = (this.album[i]);
      gal2++;
    }

    for (i; i < (gal2and3 * 2) + gal1and4; i++) {
      this.gallery3[gal3] = (this.album[i]);
      gal3++;
    }

    for (i; i < this.album.length; i++) {
      this.gallery4[gal4] = this.album[i];
      gal4++;
    }
  }

  download(src) {

    axios({
      url: src,
      method: 'GET',
      responseType: 'blob'
    })
      .then((response) => {
        const url = window.URL
          .createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', src);
        document.body.appendChild(link);
        link.click();
      })
  }
}
