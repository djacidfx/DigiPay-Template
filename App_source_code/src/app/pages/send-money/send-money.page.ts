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
  selector: 'app-send-money',
  templateUrl: './send-money.page.html',
  styleUrls: ['./send-money.page.scss'],
})
export class SendMoneyPage implements OnInit {
  history: any[] = [
    {
      "name": "Electricity",
      "image": "assets/images/bills/flash.png",
      "date": " 2 Jun 2022",
      "amount": "-3366.22"
    },
    {
      "name": "Grocery",
      "image": "assets/images/bills/food.png",
      "date": " 26 Jun 2022",
      "amount": "-8569.22"
    },
    {
      "name": "Top Up",
      "image": "assets/images/bills/plus.png",
      "date": " 8 July 2022",
      "amount": "-2323.22"
    },
    {
      "name": "Internet",
      "image": "assets/images/bills/wifi.png",
      "date": " 15 July 2022",
      "amount": "-6369.22"
    },
    {
      "name": "Games",
      "image": "assets/images/bills/video-games.png",
      "date": " 2 Sep 2022",
      "amount": "-152.22"
    },
    {
      "name": "Movie Tickets",
      "image": "assets/images/bills/ticket.png",
      "date": " 2 Jun 2022",
      "amount": "-3366.22"
    },
    {
      "name": "Top Up",
      "image": "assets/images/bills/plus.png",
      "date": " 8 July 2022",
      "amount": "-2323.22"
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

}
