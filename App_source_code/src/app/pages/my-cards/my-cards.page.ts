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
  selector: 'app-my-cards',
  templateUrl: './my-cards.page.html',
  styleUrls: ['./my-cards.page.scss'],
})
export class MyCardsPage implements OnInit {
  dynamicColors: any[] = [
    '#F8A63B',
    '#9C33CE',
    '#3C3DA9',
    '#F53D6E',
    '#4DB1E5'
  ];

  cardsList: any[] = [
    {
      "name": "Herman C. Wallace",
      "number": "307-72-XXXX-307-72-XXXX",
      "exp": "11/33",
      "color": this.getBackgroundColor()
    },
    {
      "name": "Carolyn B. Lewis",
      "number": "621-96-XXXX-621-96-XXXX",
      "exp": "11/33",
      "color": this.getBackgroundColor()
    },
    {
      "name": "Maureen G. McEwen",
      "number": "548-24-XXXX-548-24-XXXX",
      "exp": "11/33",
      "color": this.getBackgroundColor()
    },
  ];
  constructor(
    public util: UtilService
  ) {
    // this.getBackgroundColor();
  }

  ngOnInit() {
  }

  onBack() {
    this.util.onBack();
  }

  getBackgroundColor() {
    var num = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    console.log(num);
    return this.dynamicColors[num];
  }

}
