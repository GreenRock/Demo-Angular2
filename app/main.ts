import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SkoolboRoute } from './app.route';
import { HeroModule } from './hero/hero.Module';
import { HttpModule, JsonpModule } from '@angular/http';
import { 
          AppComponent, 
          HomeComponent, 
          AboutComponent, 
          CategoryComponent,
          HeroComponent,
          HeroDetailComponent
        } from './common';

import { FlickrComponent } from './flickr/flickr.component';

import  { EventDirective } from './directives/event.directive';

import { FlickrService } from "./services/flickr.Service";

import './rxjs-extensions';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SkoolboRoute,
        HeroModule,
        HttpModule,
        JsonpModule
    ],
    providers: [FlickrService],
    exports: [],
    declarations: [
        AppComponent, 
        HomeComponent, 
        AboutComponent,
        CategoryComponent,
        EventDirective,
        FlickrComponent
    ],
    bootstrap: [AppComponent]
})
export class MainModule { }
