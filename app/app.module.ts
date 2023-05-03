import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingtabComponent } from './parkingtab/parkingtab.component';
import { ParkdataComponent } from './parkdata/parkdata.component';

@NgModule({
  declarations: [
    AppComponent,
    ParkingtabComponent,
    ParkdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
