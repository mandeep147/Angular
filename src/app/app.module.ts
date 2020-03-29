import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImageComponent } from "./image-component/image.component";
import {ProfileComponent} from "./homework-1/profile/profile.component";
import {SimilarListComponent} from "./homework-1/similar-list/similar-list.component";
import {ShortProfileComponent} from "./homework-1/short-profile/short-profile.component";
import {NameLabelPipe} from "./pipes/name-label.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ProfileComponent,
    SimilarListComponent,
    ShortProfileComponent,
    NameLabelPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
