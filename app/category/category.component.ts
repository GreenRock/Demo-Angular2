import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';


import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'category-component',
    templateUrl: '/templates/category-template.html',
})
export class CategoryComponent implements OnInit {
    @Input()
    _id:string;
    constructor(private route: ActivatedRoute,
                private location: Location) {
            
     }

    ngOnInit() {
        this.route.params
            //.switchMap((params: Params) => this.heroService.getHero(+params['id']))
            //             getHero(id: number): Promise<Hero> {
            //   return this.getHeroes()
            //              .then(heroes => heroes.find(hero => hero.id === id));
            // }
            .subscribe(params => this._id = params["id"]);
     }

     goBack(): void {
        this.location.back();
    }
}