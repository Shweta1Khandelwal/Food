import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderCartPage } from '../order-cart/order-cart';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
OpenOrderCart(){
  this.navCtrl.push(OrderCartPage);
}

}
