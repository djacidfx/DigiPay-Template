/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : initPay This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'deals',
    loadChildren: () => import('./pages/deals/deals.module').then(m => m.DealsPageModule)
  },
  {
    path: 'fingure-lock',
    loadChildren: () => import('./pages/fingure-lock/fingure-lock.module').then(m => m.FingureLockPageModule)
  },
  {
    path: 'finter-prints',
    loadChildren: () => import('./pages/finter-prints/finter-prints.module').then(m => m.FinterPrintsPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'make-payments',
    loadChildren: () => import('./pages/make-payments/make-payments.module').then(m => m.MakePaymentsPageModule)
  },
  {
    path: 'my-cards',
    loadChildren: () => import('./pages/my-cards/my-cards.module').then(m => m.MyCardsPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./pages/password/password.module').then(m => m.PasswordPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./pages/payments/payments.module').then(m => m.PaymentsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'receive-money',
    loadChildren: () => import('./pages/receive-money/receive-money.module').then(m => m.ReceiveMoneyPageModule)
  },
  {
    path: 'select-payments',
    loadChildren: () => import('./pages/select-payments/select-payments.module').then(m => m.SelectPaymentsPageModule)
  },
  {
    path: 'send-money',
    loadChildren: () => import('./pages/send-money/send-money.module').then(m => m.SendMoneyPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then(m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./pages/success/success.module').then(m => m.SuccessPageModule)
  },
  {
    path: 'top-up',
    loadChildren: () => import('./pages/top-up/top-up.module').then(m => m.TopUpPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then(m => m.VerificationPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
