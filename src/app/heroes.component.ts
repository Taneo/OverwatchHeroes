import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { Role } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

const ROLES: Role[] = [
    {id: 1, name: 'All'},
    {id: 2, name: 'Offense', icon: 'src/assets/img/offense.svg'},
    {id: 3, name: 'Defense', icon: 'src/assets/img/defense.svg'},
    {id: 4, name: 'Tank', icon: 'src/assets/img/tank.svg'},
    {id: 5, name: 'Support', icon: 'src/assets/img/support.svg'},
];

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./app.component.css']
})

export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    selectedRole = 1;
    heroes: Hero[];
    roles = ROLES;

    constructor(private router: Router, private heroService: HeroService){}

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelectHero(hero: Hero): void {
        this.selectedHero = hero;
    }

    onSelectRole(nr: number): void {
        this.selectedRole = nr;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }

}







