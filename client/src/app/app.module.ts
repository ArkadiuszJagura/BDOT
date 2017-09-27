import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RoadsModule} from "./roads/roads.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoadsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
