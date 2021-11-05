import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { QAndAComponent } from './components/q-and-a/q-and-a.component';
import { RequestComponent } from './components/request/request.component';

const routes: Routes = [{
  path: '',
  component: HomePageComponent,
},
{
  path: 'home',
  component: HomePageComponent,
},
{
  path: 'add-post',
  component: AddPostComponent,
},
{
  path: 'portfolio',
  component: PortfolioComponent,
},
{
  path: 'q-and-a',
  component: QAndAComponent,
},
{
  path: 'requests',
  component: RequestComponent,
},
{
  path: 'my-profile',
  component: MyProfileComponent,
},
{
  path: '**',
  component: HomePageComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
