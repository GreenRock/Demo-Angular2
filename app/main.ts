import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SkoolboRoute } from './app.route';
import { HeroModule } from './hero/hero.Module';

import { 
          AppComponent, 
          HomeComponent, 
          AboutComponent, 
          CategoryComponent,
          HeroComponent,
          HeroDetailComponent
        } from './common';

import  { EventDirective } from './directives/event.directive';

import './rxjs-extensions';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SkoolboRoute,
        HeroModule
    ],
    providers: [],
    exports: [],
    declarations: [
        AppComponent, 
        HomeComponent, 
        AboutComponent,
        CategoryComponent,
        EventDirective
    ],
    bootstrap: [AppComponent]
})
export class MainModule { }
