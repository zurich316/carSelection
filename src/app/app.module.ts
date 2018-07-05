import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// pages
import { CarComparationPage } from '../pages/car-comparation/car-comparation';
import { CarListingPage } from '../pages/car-listing/car-listing';
import { CarPopoverPage } from '../pages/car-popover/car-popover';

// Services
import { CarModelProvider } from '../providers/car-model/car-model';

@NgModule({
  declarations: [
    MyApp,
    CarComparationPage,
    CarListingPage,
    CarPopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CarComparationPage,
    CarListingPage,
    CarPopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarModelProvider
  ]
})
export class AppModule {}
