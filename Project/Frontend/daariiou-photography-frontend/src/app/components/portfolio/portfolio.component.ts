import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Portfolio } from 'src/api/portfolio';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
// import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent implements OnInit {

  public innerWidth: number;
  public album: Portfolio[] = [] as Portfolio[];

  public gallery1: Portfolio[] = [] as Portfolio[];
  public gallery2: Portfolio[] = [] as Portfolio[];
  public gallery3: Portfolio[] = [] as Portfolio[];
  public gallery4: Portfolio[] = [] as Portfolio[];

  constructor(private modalService: NgbModal, private http: HttpClient /*, public gallery: Gallery*/ ) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
    this.splitAlbumIntoGal()
    this.basicLightboxExample()
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

  basicLightboxExample() {
     // this.gallery.ref().load(this.album as GalleryItem[]);
  }


  splitAlbumIntoGal() {
    this.http.get("assets/pictures.json").subscribe(data => {
      this.album = data as Portfolio[];
      this.randomArrayShuffle(this.album);
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
    });
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
