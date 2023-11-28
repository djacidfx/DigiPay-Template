/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : initPay This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public util: UtilService
  ) { }

  ngOnInit() {
  }

  onSettings() {
    console.log('on settngs');
    this.util.navigateToPage('settings');
  }

  onLogout() {
    this.util.navigateRoot('signin');
  }

  onMyCards() {
    this.util.navigateToPage('my-cards');
  }

}
