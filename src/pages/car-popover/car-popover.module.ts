import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarPopoverPage } from './car-popover';

@NgModule({
  declarations: [
    CarPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(CarPopoverPage),
  ],
})
export class CarPopoverPageModule {}
