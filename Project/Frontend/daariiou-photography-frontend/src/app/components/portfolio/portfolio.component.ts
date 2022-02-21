import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, ChangeDetectionStrategy, OnInit, ViewEncapsulation } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { LightGallery } from 'lightgallery/lightgallery';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { Lightbox } from 'ngx-lightbox';
import { PictureList } from 'src/assets/pictures';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {

  public innerWidth: number;
  public album: any[] = [] as any[];

  public gallery1: any[] = [] as any[];
  public gallery2: any[] = [] as any[];
  public gallery3: any[] = [] as any[];
  public gallery4: any[] = [] as any[];

  public pictureList: PictureList = new PictureList;
  private subscriptions = new Subscription();
  private kindOfShooting: string;

  private KoSStudio = 1;
  private KoSOutdoor = 2;
  private KoSVehicles = 3;

  constructor(private route: ActivatedRoute) { }

  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  private lightGallery!: LightGallery;
  private needRefresh = false;
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
    this.subscriptions = this.route.paramMap.subscribe((params) => {
      this.kindOfShooting = params.get('kind');
    });

    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
    console.log(this.album)
    this.splitAlbumIntoGal()
  }


  randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  splitAlbumIntoGal() {
    switch (this.kindOfShooting) {
      case 'studio':
        this.album = this.pictureList.pictures.filter(kos => kos.kindOfShooting == this.KoSStudio);
        break;
      case 'outdoor':
        this.album = this.pictureList.pictures.filter(kos => kos.kindOfShooting == this.KoSOutdoor);
        break;
      case 'vehicles':
        this.album = this.pictureList.pictures.filter(kos => kos.kindOfShooting == this.KoSVehicles);
        break;
      default:
        this.album = this.pictureList.pictures;
        break;
    }
    this.randomArrayShuffle(this.album);
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
}
