import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]

})

export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];
    rnd: number = this.getRandom(0, 20);

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes().subscribe(heroes => {
            this.heroes = heroes.slice(this.rnd, this.rnd + 4);
        });
    }

    getRandom(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }
}
