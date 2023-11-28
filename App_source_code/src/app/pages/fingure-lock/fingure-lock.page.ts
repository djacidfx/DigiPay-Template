/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : initPay This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-fingure-lock',
  templateUrl: './fingure-lock.page.html',
  styleUrls: ['./fingure-lock.page.scss'],
})
export class FingureLockPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private util: UtilService
  ) { }

  ngOnInit() {
  }

  onHome() {
    this.modalController.dismiss();
    this.util.navigateRoot('tabs');
  }

}
