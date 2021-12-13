import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { DevicesListDetailsComponent } from './devices-list-details/devices-list-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DevicesListComponent,
    DevicesListDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
