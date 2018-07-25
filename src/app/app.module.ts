import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from './shared/material.module';
import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { HomeModule }        from './home/home.module';
import { HeaderComponent } from './layout/header/header.component';
import { HeaderNavComponent } from './layout/header-nav/header-nav.component';
import { FooterComponent } from './layout/footer/footer.component';

import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HomeModule,

  ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, HeaderNavComponent, ContactComponent,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
