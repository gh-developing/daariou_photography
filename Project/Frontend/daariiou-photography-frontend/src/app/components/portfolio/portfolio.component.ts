import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { LightGallery } from 'lightgallery/lightgallery';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PictureService } from 'src/api/lib/services';
import { Picture } from 'src/api/lib/models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {
  public innerWidth: number;
  public gallery1: any[] = [] as any[];
  public gallery2: any[] = [] as any[];
  public gallery3: any[] = [] as any[];
  public gallery4: any[] = [] as any[];
  public settings = {
    counter: false,
    plugins: [lgZoom]
  };

  public pictureList: Picture[] = [];
  private subscriptions = new Subscription();
  private kindOfShooting: string;
  private KoSStudio = 1;
  private KoSOutdoor = 2;
  private KoSVehicles = 3;
  private lightGallery!: LightGallery;
  private needRefresh = false;

  constructor(private route: ActivatedRoute, private readonly pictureService: PictureService) { }

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
    this.subscriptions = this.route.paramMap.subscribe((params) => {
      this.kindOfShooting = params.get('kind');
    });
    this.setPortfolio();
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
    console.log(this.pictureList)
    this.splitAlbumIntoGal()
  }

  getPortfolio() {
    this.pictureService.apiV1PictureGetGet$Json()
    .subscribe(
      (result) => {
        console.log(result);
        this.pictureList = result;
      }
    ), (error) => {
      console.log(error)};
  }

  getPortfolioByKosId(kosId) {
    this.pictureService.apiV1PictureGetByKoSIdGet$Json({kosID: kosId})
    .subscribe(
      (result) => {
        console.log(result);
        this.pictureList = result;
      }
    ), (error) => {
      console.log(error)};
  }

  setPortfolio() {
    switch (this.kindOfShooting) {
      case 'studio':
        this.getPortfolioByKosId(this.KoSStudio);
        break;
      case 'outdoor':
        this.getPortfolioByKosId(this.KoSOutdoor);
        break;
      case 'vehicles':
        this.getPortfolioByKosId(this.KoSVehicles);
        break;
      default:
        this.getPortfolio();
        break;
    }
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
    this.randomArrayShuffle(this.pictureList);
    console.log(this.pictureList)
    var countOfPictures = this.pictureList.length;
    var gal1and4 = Math.floor(countOfPictures / 4)
    var gal2and3 = Math.ceil(countOfPictures - ((countOfPictures / 4) * 3));

    var i = 0
    var gal1 = 0
    var gal2 = 0
    var gal3 = 0
    var gal4 = 0

    for (i; i < gal1and4; i++) {
      this.gallery1[gal1] = (this.pictureList[i]);
      gal1++;
    }

    for (i; i < gal2and3 + gal1and4; i++) {
      this.gallery2[gal2] = (this.pictureList[i]);
      gal2++;
    }

    for (i; i < (gal2and3 * 2) + gal1and4; i++) {
      this.gallery3[gal3] = (this.pictureList[i]);
      gal3++;
    }

    for (i; i < this.pictureList.length; i++) {
      this.gallery4[gal4] = this.pictureList[i];
      gal4++;
    }
  }
}
