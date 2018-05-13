import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OrdersPage } from '../pages/orders/orders';
import { DealsPage } from '../pages/deals/deals';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { CheckoutPage } from '../pages/checkout/checkout';
import { OrderCartPage } from '../pages/order-cart/order-cart';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { ProductPage } from '../pages/product/product';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrdersPage,
    DealsPage,
    SettingsPage,
    LoginPage,
    OrderCartPage,
    CheckoutPage,
    OrderHistoryPage,
    ProductPage
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrdersPage,
    DealsPage,
    SettingsPage,
    LoginPage,
    OrderCartPage,
    CheckoutPage,
    OrderHistoryPage,
    ProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
