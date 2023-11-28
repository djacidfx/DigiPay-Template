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
  selector: 'app-finter-prints',
  templateUrl: './finter-prints.page.html',
  styleUrls: ['./finter-prints.page.scss'],
})
export class FinterPrintsPage implements OnInit {

  constructor(
    public util: UtilService
  ) { }

  ngOnInit() {
  }

  onHome() {
    this.util.navigateRoot('tabs');
  }

}
