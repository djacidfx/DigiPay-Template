/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : initPay This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakePaymentsPageRoutingModule } from './make-payments-routing.module';

import { MakePaymentsPage } from './make-payments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakePaymentsPageRoutingModule
  ],
  declarations: [MakePaymentsPage]
})
export class MakePaymentsPageModule { }
