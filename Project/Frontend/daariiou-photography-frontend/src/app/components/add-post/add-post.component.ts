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

  constructor(public activeModal: NgbActiveModal, private readonly pictureService: PictureService, private sant: DomSanitizer) { }

  ngOnInit(): void {
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
    this.convertFileToBase64();
  }

}
