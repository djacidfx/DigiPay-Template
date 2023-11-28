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
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  viewPassword: boolean = false;
  constructor(
    public util: UtilService
  ) { }

  onFingerPrints() {
    this.util.navigateToPage('finter-prints');
  }

  ngOnInit() {
  }

  changeType() {
    this.viewPassword = !this.viewPassword;
  }

}
