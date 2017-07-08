import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {HeroService} from './hero.service';
import {Hero} from './hero';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-addModal',
    styleUrls: ['hero-search.component.css'],
    templateUrl: './hero-addModal.component.html'

})

export class HeroAddModalComponent implements OnInit{
    heroes: Hero[];
    newHero: Hero = {
        id: 999,
        roleid: 2,
        name: 'Unknown',
        img: 'src/assets/img/hero/defaultIcon.png',
    };

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => {
            this.heroes = heroes;
        });
    }

    save(): void {
        let count = 0;
        let newId = 0;

        /*----------Search newId----------*/
        for (let i = 0; i < this.heroes.length; i++) {
            count = count + 1;
            if(count !== this.heroes[i].id){
                newId = i + 1;
                break;
            }
        }

        if (count === this.heroes.length){
            newId = this.heroes.length + 1;
        }
        /*--------------------------------*/

        const _heroes = {
            id: newId,
            roleid: this.newHero.roleid,
            name: this.newHero.name,
            img: this.newHero.img,
        };

        this.heroService.create(_heroes).subscribe(() => {
            location.reload();
        });
    }

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    closeModal(){
        document.getElementById('addModal').style.display = 'none';
    }
}
