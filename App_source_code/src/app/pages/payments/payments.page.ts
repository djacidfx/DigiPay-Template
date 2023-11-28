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
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  dynamicColors: any[] = [
    '#F8A63B',
    '#9C33CE',
    '#3C3DA9',
    '#F53D6E',
    '#4DB1E5'
  ];

  paymentList: any[] = [
    {
      "title": "Electricity A",
      "sub_title": "Company A Descriptions",
      "color": this.getBackgroundColor()
    },
    {
      "title": "Electricity B",
      "sub_title": "Company B Descriptions",
      "color": this.getBackgroundColor()
    },
    {
      "title": "Electricity C",
      "sub_title": "Company C Descriptions",
      "color": this.getBackgroundColor()
    },
    {
      "title": "Electricity D",
      "sub_title": "Company D Descriptions",
      "color": this.getBackgroundColor()
    },
    {
      "title": "Electricity E",
      "sub_title": "Company E Descriptions",
      "color": this.getBackgroundColor()
    },
    {
      "title": "Electricity F",
      "sub_title": "Company F Descriptions",
      "color": this.getBackgroundColor()
    },
    {
      "title": "Electricity G",
      "sub_title": "Company G Descriptions",
      "color": this.getBackgroundColor()
    },
    {
      "title": "Electricity H",
      "sub_title": "Company H Descriptions",
      "color": this.getBackgroundColor()
    },
  ];



  constructor(
    public util: UtilService
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.util.onBack();
  }

  getBackgroundColor() {
    var num = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    console.log(num);
    return this.dynamicColors[num];
  }

  onPayment() {
    this.util.navigateToPage('select-payments');
  }

}
