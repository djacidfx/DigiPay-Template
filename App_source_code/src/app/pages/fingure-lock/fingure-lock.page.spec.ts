/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : initPay This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FingureLockPage } from './fingure-lock.page';

describe('FingureLockPage', () => {
  let component: FingureLockPage;
  let fixture: ComponentFixture<FingureLockPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FingureLockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
