import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: [ './hero-search.component.css' ],
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
    heroes: Hero[];
    searchHero: Hero[];
    selectedHero: Hero;

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router,
        private heroService: HeroService) {
        this.getHeroes();
    }

    search(term: string): void{
        this.searchHero = [];
        this.filterHero(term);
    }

    filterHero(term: string) {
        this.heroes.forEach((hero, i) => {
            if (hero.name.toUpperCase().indexOf(term.toUpperCase()) !== -1 && term !== '') {
                this.searchHero.push(this.heroes[i]);
            }
        });
    }

    ngOnInit(): void{
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => {
            this.heroes = heroes;
            this.searchHero = [];
        });
    }

    selectHero(hero: Hero): void {
        this.selectedHero = hero;
    }

    openModal(){
        document.getElementById('modal').style.display = 'block';
    }
}
