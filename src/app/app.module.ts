import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MinDirective } from './min.directive';
import { MaxDirective } from './max.directive';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MinDirective,
    MaxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
