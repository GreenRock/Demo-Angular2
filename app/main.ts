import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import  { GenerationHtml, FormValidate } from './directives/generation.directive';

import { FlickrService } from "./services/flickr.Service";

import { AuthenticateComponent } from './authenticate/authenticate.component';

import { SkoolboRoute } from './app.route';

import { HeroModule } from './hero/hero.Module';
import { CustomFormsModule } from 'ng2-validation'
import './rxjs-extensions';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SkoolboRoute,
        HeroModule,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule,
        CustomFormsModule
    ],
    providers: [
        FlickrService
    ],
    exports: [],
    declarations: [
        AppComponent, 
        HomeComponent, 
        AboutComponent,
        CategoryComponent,
        EventDirective,
        GenerationHtml,
        FlickrComponent,
        AuthenticateComponent,
        FormValidate
    ],
    bootstrap: [AppComponent]
})
export class MainModule { }
