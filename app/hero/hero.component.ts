import { Component, OnInit } from '@angular/core';
import  { HeroService } from '../services/HeroService';
import { Hero } from '../services/Hero';

@Component({
    moduleId: module.id,
    selector: 'hero-component',
    templateUrl: 'hero-template.html',
    providers: [HeroService]
})
export class HeroComponent implements OnInit {
    heros:Hero[];
    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.heroService.getHeros().then(heros => this.heros = heros);
     }

     onClick(hero:Hero){
         location.href = "/hero-detail/" + hero.Id;
     }
}