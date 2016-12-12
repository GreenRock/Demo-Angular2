import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeroComponent }   from './hero.component';
import { HeroDetailComponent }   from './hero.detail.component';

@NgModule({
    imports : [ 
        RouterModule.forRoot(
        [
            { path : 'hero', component : HeroComponent },
            { path : 'hero/:id', component : HeroDetailComponent },
        ])
    ],
    exports: [RouterModule]
})
export class HeroRoute {
    
}