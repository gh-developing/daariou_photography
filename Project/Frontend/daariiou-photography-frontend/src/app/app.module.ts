import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LightgalleryModule } from 'lightgallery/angular';
import { LightboxModule } from 'ngx-lightbox'
import { ApiModule } from 'src/api/lib/api.module';

import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { KindOfShootingComponent } from './components/kind-of-shooting/kind-of-shooting.component';
import { QAndAComponent } from './components/q-and-a/q-and-a.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RequestComponent } from './components/request/request.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NewShootingComponent } from './components/new-shooting/new-shooting.component';
import { ImpressumComponent } from './components/impressum.component';
import { ContactComponent } from './components/contact/contact.component';
import { DeleteProfileComponent } from './components/my-profile/delete-profile/delete-profile.component';
import { UpdateProfileComponent } from './components/my-profile/update-profile/update-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { ValidateUserNameDirective } from './directives/validate-user-name.directive';
import { DeclineComponent } from './components/decline/decline.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PortfolioComponent,
    QAndAComponent,
    AboutMeComponent,
    KindOfShootingComponent,
    RequestComponent,
    AddPostComponent,
    MyProfileComponent,
    NewShootingComponent,
    ImpressumComponent,
    DeclineComponent,
    RegisterComponent,
    ContactComponent,
    LogInComponent,
    DeleteProfileComponent,
    UpdateProfileComponent,
    PasswordPatternDirective,
    ValidateUserNameDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LightgalleryModule,
    LightboxModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,

    ApiModule.forRoot({ rootUrl: 'https://localhost:5001' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
