import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the AmountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-amount',
  templateUrl: 'amount.html',
})
export class AmountPage {
parameter1: string;
color: string;
amount: number;
addAmount: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public toastCtrl: ToastController) {
    // this.parameter1 = navParams.get('param1');
    // this.amount = navParams.get('data');

    //forward way
    // this.events.subscribe('hi', (amount) => {
    //   // user and time are the same arguments passed in `events.publish(user, time)`
    //   console.log('hi', amount);
    //   this.showContent(amount);

     
    // });
  }
  //forward way
    // showContent(amount) {
    //   let toast = this.toastCtrl.create({
    //     message: 'hi,' + amount,
    //     duration: 3000
    //   });


    //   toast.onDidDismiss(() => {
    //     console.log('Dismissed toast');
    //   });

    //   toast.present();

    // }
    

      goTo(amount:number) {
  //   amount = amount;
    this.amount =amount;
    // this.navCtrl.push(AmountPage);


    this.events.publish('hi', this.amount);
        this.navCtrl.pop();


}

    // this.parameter2 = navParams.get('param2');
    
  addCredits()
  {
    // this.events.publish('hi', this.amount);

  }

  // next1Page() {
  //   this.nav.push(HomePage);
  // }

  // pop() {
  //   this.nav.pop();
  // }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmountPage');
  }

}
