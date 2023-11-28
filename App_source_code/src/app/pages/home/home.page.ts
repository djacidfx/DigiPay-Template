/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : initPay This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { register } from 'swiper/element';

register();
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  payBillsList: any[] = [
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
    'assets/images/offer/1.jpeg',
    'assets/images/offer/2.jpeg',
    'assets/images/offer/3.jpeg',
    'assets/images/offer/4.jpeg',
  ];

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

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1.2,
    spaceBetween: 10,
    centeredSlides: true
  };
  constructor(
    public util: UtilService
  ) { }

  ngOnInit() {
  }

  onSendMoney() {
    this.util.navigateToPage('send-money');
  }

  onReceiveMoney() {
    this.util.navigateToPage('receive-money');
  }

  onTopUp() {
    this.util.navigateToPage('top-up');
  }

  makePayments() {
    this.util.navigateToPage('payments');
  }

  async startScan() {
    // Check camera permission
    // This is just a simple example, check out the better checks below
    await BarcodeScanner.checkPermission({ force: true });

    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    BarcodeScanner.hideBackground();

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // if the result has content
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
    }
  };
}
