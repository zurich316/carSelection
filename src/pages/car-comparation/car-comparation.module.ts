import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarComparationPage } from './car-comparation';

@NgModule({
  declarations: [
    CarComparationPage,
  ],
  imports: [
    IonicPageModule.forChild(CarComparationPage),
  ],
})
export class CarComparationPageModule {}
