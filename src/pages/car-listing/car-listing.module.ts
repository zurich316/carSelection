import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarListingPage } from './car-listing';

@NgModule({
  declarations: [
    CarListingPage,
  ],
  imports: [
    IonicPageModule.forChild(CarListingPage),
  ],
})
export class CarListingPageModule {}
