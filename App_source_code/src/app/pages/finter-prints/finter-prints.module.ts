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

import { FinterPrintsPageRoutingModule } from './finter-prints-routing.module';

import { FinterPrintsPage } from './finter-prints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinterPrintsPageRoutingModule
  ],
  declarations: [FinterPrintsPage]
})
export class FinterPrintsPageModule { }
