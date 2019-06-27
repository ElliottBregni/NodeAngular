import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr' ;
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { NavMenuComponent } from './Components/navmenu/navmenu.component';
import { HomeComponent } from './Components/home/home.component';
import { RouterModule } from '@angular/router';

import 'flatpickr/dist/flatpickr.css';
//import { SearchComponent } from './Components/search/search.component';
//import { UserComponent } from './Components/user/user.component';
//import { ArticleComponent } from './Components/article/article.component';
//import { LoginComponent } from './Components/login/login.component';
//import { ArticleCommentComponent } from './Components/article/article-comment/article-comment.component';



@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HomeComponent,
    NavMenuComponent,
    //SearchComponent,
    //UserComponent,
    //ArticleComponent,
    //LoginComponent,
   //ArticleCommentComponent,

   
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
     RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'calendar', component: CalendarComponent },
    ]),
     BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  exports: [CalendarComponent]
})
export class AppModule { }
