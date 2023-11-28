/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : initPay This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
})
export class DealsPage implements OnInit {
  payBillsList: any[] = [
    {
      "name": "All",
      "image": "assets/images/bills/other.png"
    },
    {
      "name": "Electricity",
      "image": "assets/images/bills/flash.png"
    },
    {
      "name": "Internet",
      "image": "assets/images/bills/wifi.png"
    },
    {
      "name": "Water",
      "image": "assets/images/bills/drop.png"
    },
    {
      "name": "Hotel",
      "image": "assets/images/bills/hotel.png"
    },
    {
      "name": "Foods",
      "image": "assets/images/bills/food.png"
    },
    {
      "name": "Movies",
      "image": "assets/images/bills/ticket.png"
    },
    {
      "name": "Games",
      "image": "assets/images/bills/video-games.png"
    },
    {
      "name": "More",
      "image": "assets/images/bills/other.png"
    },
  ];

  offersList: any[] = [
    {
      "name": "GROM26355",
      "image": "assets/images/offer/1.jpeg",
      "date": "2 Jun 2022"
    },
    {
      "name": "GROM26355",
      "image": "assets/images/offer/2.jpeg",
      "date": "15 Jun 2022"
    },
    {
      "name": "GROM26355",
      "image": "assets/images/offer/3.jpeg",
      "date": "21 Jun 2022"
    },
    {
      "name": "GROM26355",
      "image": "assets/images/offer/4.jpeg",
      "date": "15 Jul 2022"
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
