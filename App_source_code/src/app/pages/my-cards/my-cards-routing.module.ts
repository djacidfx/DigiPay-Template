/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : initPay This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCardsPage } from './my-cards.page';

const routes: Routes = [
  {
    path: '',
    component: MyCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCardsPageRoutingModule { }
