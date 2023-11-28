/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : initPay This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceiveMoneyPage } from './receive-money.page';

describe('ReceiveMoneyPage', () => {
  let component: ReceiveMoneyPage;
  let fixture: ComponentFixture<ReceiveMoneyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceiveMoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
