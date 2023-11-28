/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : initPay This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinterPrintsPage } from './finter-prints.page';

describe('FinterPrintsPage', () => {
  let component: FinterPrintsPage;
  let fixture: ComponentFixture<FinterPrintsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FinterPrintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
