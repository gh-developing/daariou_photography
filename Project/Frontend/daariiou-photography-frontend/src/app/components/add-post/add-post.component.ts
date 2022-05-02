import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Picture } from 'src/api/lib/models';
import { PictureService } from 'src/api/lib/services';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  base64: string = 'Base64...';
  fileSelected?: Blob;
  imageUrl?: string;

  public pictureToAdd: Picture = {} as Picture;

  constructor(public activeModal: NgbActiveModal, private readonly pictureService: PictureService, private sant: DomSanitizer) { }

  ngOnInit(): void {
    console.log(this.base64)
  }

  onSelectNewFile(files: any) {
    this.fileSelected = files.target?.files[0];
    this.imageUrl = this.sant.bypassSecurityTrustUrl(
      window.URL.createObjectURL(this.fileSelected)
    ) as string;
    this.base64 = 'Base64...';
  }

  convertFileToBase64() {
    let reader = new FileReader();
    reader.readAsDataURL(this.fileSelected as Blob);
    reader.onloadend = () => {
      this.base64 = reader.result as string;
    };
  }

  add() {
    console.log("click");
    this.pictureToAdd.src = this.base64;
    this.pictureToAdd.thumb = this.base64;
    this.pictureToAdd.isPublic = '1';
    this.pictureToAdd.date = new Date().toISOString();
    this.pictureToAdd.koSid = 1;
    this.pictureToAdd.uid = 3;
    this.pictureService.apiV1PicturePostPost$Json({body: this.pictureToAdd}).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
