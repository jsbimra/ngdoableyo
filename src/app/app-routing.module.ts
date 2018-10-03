import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './home/home.component';
// import { AboutComponent }       from './about/about.component';
import { ContactComponent }     from './contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    // { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: '**',
        component: HomeComponent
    },
    // {
    //     path: '**',
    //     component: PageNotFoundCompontent
    // }
]

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: true, // <-- debugging purposes only
         // preloadingStrategy: SelectivePreloadingStrategy,
  
        }
      )
    ],
    exports: [
      RouterModule
    ],
    providers: [
      //CanDeactivateGuard,
      //SelectivePreloadingStrategy
    ]
  })
  export class AppRoutingModule { }