import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';
/**
 * Generated class for the OrderCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-order-cart',
  templateUrl: 'order-cart.html',
})
export class OrderCartPage {
  @ViewChild('myNumber') input: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController ) {
  }
  // ngAfterViewInit() {
  //   console.log(this.input.nativeElement.value);
  //   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderCartPage');
    
  }
  
  decreaseValue(){
    console.log("Worked -");
  }
  IncreaseValue(){
    console.log("Worked +");
  }
  trash(){
    let alert = this.alertCtrl.create({
      title: 'Delete item',
      subTitle: 'Delete this item',
      buttons: ['OK']
    });
    alert.present();
  }
  checkout(){
 this.navCtrl.push(CheckoutPage);
  }
}
