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
import { FingureLockPage } from '../fingure-lock/fingure-lock.page';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  viewPassword: boolean = false;
  constructor(
    public util: UtilService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onHome() {
    this.util.navigateRoot('/tabs');
  }

  changeType() {
    this.viewPassword = !this.viewPassword;
  }

  async openFingerLock() {
    const modal = await this.modalController.create({
      component: FingureLockPage,
      cssClass: 'custom_modal',
    });

    await modal.present();

  }

}
