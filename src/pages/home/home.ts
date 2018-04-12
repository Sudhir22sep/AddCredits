import { Component } from '@angular/core';
import { NavController, Events, ToastController } from 'ionic-angular';

import { AmountPage } from '../amount/amount';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

amount: number;
addAmount:number;
  amountUp=0;
amount1: number;
 
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public events: Events) {
    // this.navCtrl.pop();


     this.events.subscribe('hi', (amount) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('hi', amount);
      // this.showContent(amount);
      this.amount = amount;
     this.amount = Number(this.amount);
      this.amountUp = Number(this.amountUp);
       console.log("++++++++++++++", amount+typeof this.amountUp);
      this.amountUp=this.amount+this.amountUp;
      console.log(this.amount);

    });

  }



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

  goToA() {
    //   amount = amount;
    // this.addAmount =amount;
    this.navCtrl.push(AmountPage);


    // this.events.publish('hi', this.amount);


  }

  // nextPage() {
  //   // this.navCtrl.push(AmountPage);
  //   this.navCtrl.push(AmountPage, {
  //     param1: '{{Balance}}', param2: 'Johnson'
  //   });

    
  // }


  // forward way
  
}
