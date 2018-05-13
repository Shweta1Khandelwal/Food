import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderCartPage } from './order-cart';

@NgModule({
  declarations: [
    OrderCartPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderCartPage),
  ],
})
export class OrderCartPageModule {}
