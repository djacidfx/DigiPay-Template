/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : initPay This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { register } from 'swiper/element';
import Swiper from 'swiper';

register();
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  @ViewChild("swiper") swiper?: ElementRef<{ swiper: Swiper }>
  isLast: boolean = false;
  length: any = 0;
  index: any = 0;
  items: any[] = [];
  constructor(
    public util: UtilService
  ) {
    setTimeout(() => {
      this.length = this.swiper?.nativeElement.swiper.slides.length;
      this.items = [];
      for (let i = 0; i < this.length; i++) {
        this.items.push(i);
      }
    }, 1000);
  }

  ngOnInit() {
  }

  onSkip() {
    this.swiper?.nativeElement.swiper.slideTo(3);
  }

  onLogin() {
    this.util.navigateRoot('/signin');
  }

  onRegister() {
    this.util.navigateRoot('/signup');
  }

  slideChanged(event: any) {
    this.index = this.swiper?.nativeElement.swiper.activeIndex;
    this.isLast = this.swiper?.nativeElement.swiper.isEnd ?? false;
  }

}
