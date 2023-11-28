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

import { FingureLockPageRoutingModule } from './fingure-lock-routing.module';

import { FingureLockPage } from './fingure-lock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FingureLockPageRoutingModule
  ],
  declarations: [FingureLockPage]
})
export class FingureLockPageModule { }
