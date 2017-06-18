import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {HeroService} from './hero.service';
import {HeroSearchComponent} from './hero-search.component';
import {Hero} from './hero';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-modal',
    templateUrl: './hero-modal.component.html',
    styleUrls: ['hero-search.component.css']
})

export class HeroModalComponent implements OnInit {
    @Input() hero: Hero;

    ngOnInit(): void {
        this.route.params
            .switchMap((hero: Hero) => this.heroService.getHero(this.hero._id))
            .subscribe(hero => this.hero = hero);
    }

    save(hero): void {
        let _heroes = {
           _id: hero._id,
           id: hero.id,
           roleid: hero.roleid,
           name: hero.name,
           img: hero.img,
        };

        this.heroService.update(_heroes).subscribe(() => {
            this.closeModal();
        });
    }

    goBack(): void {
        this.location.back();
    }

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    closeModal(){
        document.getElementById('modal').style.display = 'none';
    }
}
