import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router  } from "@angular/router";
import { Location } from "@angular/common";
import {  HeroService } from "../services/HeroService";
import { Hero } from "../services/Hero";
import { Observable } from 'rxjs';
import { Subject }  from 'rxjs/Subject';

@Component({
    moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: 'hero-detail-template.html',
    providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {
    
    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private router: Router,
                private location: Location) { }

    id:number;
    hero: Hero;
    ngOnInit() { 
        this.route.params
                  .switchMap((params: Params) => this.heroService.getHero(params["id"]).then(hero => this.hero = hero))
                  .subscribe(params => this.id = params["id"]);
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.Id];
        this.router.navigate(link);
    }

    GoBack():void{
        this.location.back();
    }
}