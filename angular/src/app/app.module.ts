import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CollapseDirective } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { DisplaySpannersComponent } from './display-spanners/display-spanners.component';
import {Routes, RouterModule} from "@angular/router";
import { SplashComponent } from './splash/splash.component';
import { DetailSpannerComponent } from './detail-spanner/detail-spanner.component';

const appRoutes: Routes = [
  {
    path: 'display-spanners',
    component: DisplaySpannersComponent
  },
  {
    path: 'detail-spanner/:id',
    component: DetailSpannerComponent
  },
  {
    path: '',
    component: SplashComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CollapseDirective,
    DisplaySpannersComponent,
    SplashComponent,
    DetailSpannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }