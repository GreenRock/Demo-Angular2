import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroComponent }   from './hero.component';
import { HeroDetailComponent }   from './hero.detail.component';
import { HeroRoute }   from './hero.routing';

@NgModule({
    imports: [   
        BrowserModule,
        FormsModule,
        HeroRoute
    ],
    exports: [],
    declarations: [
        HeroComponent, 
        HeroDetailComponent
    ],
    providers: [],
    bootstrap: [HeroComponent]
})
export class HeroModule { }
