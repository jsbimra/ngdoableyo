import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MaterialModule } from '../shared/material.module';

import { HomeComponent } from './home.component';
import { AboutComponent } from '../about/about.component';
import { HorizontalAdsComponent } from '../horizontal-ads/horizontal-ads.component';

// console.log(HomeModule);

@NgModule({
    imports: [
        MaterialModule
    ],
    declarations: [
        HomeComponent,    
        AboutComponent,
        HorizontalAdsComponent 
    ]
})

export class HomeModule {}