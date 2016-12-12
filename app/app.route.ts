import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { 
          AppComponent, 
          HomeComponent, 
          AboutComponent, 
          CategoryComponent,
          HeroComponent,
          HeroDetailComponent 
        } from './common';

import 'rxjs/add/operator/switchMap';

@NgModule({
    imports : [ 
        RouterModule.forRoot(
        [
            { path : '',  redirectTo:  '/home', pathMatch: 'full' },
            { path: 'google', redirectTo:  'http://google.com', pathMatch: 'full' },
            { path : 'home',  component : HomeComponent, },
            { path : 'about', component : AboutComponent },
            { path : 'category/:id', component : CategoryComponent }
        ])
    ],
    exports: [RouterModule]
})
export class SkoolboRoute {
    
}