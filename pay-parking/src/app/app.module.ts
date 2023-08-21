import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvailableSpotsComponent } from './components/available-spots/available-spots.component';
import { ParkedCarsComponent } from './components/parked-cars/parked-cars.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { FormsModule } from '@angular/forms';
import { RemoveCarSummaryComponent } from './components/remove-car-summary/remove-car-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    AvailableSpotsComponent,
    ParkedCarsComponent,
    AddCarComponent,
    RemoveCarSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
