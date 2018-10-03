import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'angular-custom-modal';
import { MaterialModule } from './shared/material.module';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { HomeModule }        from './home/home.module';
import { HeaderComponent } from './layout/header/header.component';
import { HeaderNavComponent } from './layout/header-nav/header-nav.component';
import { FooterComponent } from './layout/footer/footer.component';

import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BackToTopDirective } from './back-to-top.directive';

@NgModule({
  imports:      [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    HomeModule,
    ModalModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxPageScrollModule 

  ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, HeaderNavComponent, ContactComponent, FeedbackComponent, PrivacyPolicyComponent, BackToTopDirective,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
