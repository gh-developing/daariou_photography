import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Picture } from 'src/api/lib/models';
import { PictureService } from 'src/api/lib/services';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  public newPost: Picture = {};
  constructor(public activeModal: NgbActiveModal, private readonly pictureService: PictureService) { }

  ngOnInit(): void {
  }

  add() {
    this.newPost.date = new Date().toISOString()
    this.newPost.isPublic = "1"
    this.newPost.koSid = 1
    this.pictureService.apiV1PicturePostPost$Json({uid: null, body: this.newPost}).subscribe((result) => {console.log(result)}), (error) => {console.log(error)};
  }

}
