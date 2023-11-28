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
  selector: 'app-select-payments',
  templateUrl: './select-payments.page.html',
  styleUrls: ['./select-payments.page.scss'],
})
export class SelectPaymentsPage implements OnInit {

  constructor(
    public util: UtilService
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.util.onBack();
  }

  onMakePayment() {
    this.util.navigateToPage('make-payments');
  }

}
