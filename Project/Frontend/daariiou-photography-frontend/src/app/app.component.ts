import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPostComponent } from './components/add-post/add-post.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NewShootingComponent } from './components/new-shooting/new-shooting.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestComponent } from './components/request/request.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'daariiou-photography-frontend';
  public isActive: boolean = false;
  public readonly requestComponent: RequestComponent = new RequestComponent();
  public readonly userService: UserService = new UserService();

  constructor(public modalService: NgbModal) { }

  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }

  logOut() {
    this.userService.logOut();
  }

  openModal(component: string) {
    switch (component) {
      case 'register':
        this.modalService.open(RegisterComponent, { centered: true, size: 'md' })
        break;
      case 'newPost':
        this.modalService.open(AddPostComponent, { centered: true, size: 'md' })
        break;
      case 'newShooting':
        this.modalService.open(NewShootingComponent, { centered: true, size: 'md' })
        break;
      case 'logIn':
        this.modalService.open(LogInComponent, { centered: true, size: 'md' })
        break;
    }
  }
}