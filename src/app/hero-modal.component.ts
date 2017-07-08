import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

import {HeroService} from './hero.service';
import {Hero} from './hero';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-modal',
    templateUrl: './hero-modal.component.html',
    styleUrls: ['hero-search.component.css'],
    animations: [
        trigger('movePanel', [
            state('still', style({
                opacity: 0,
                display: 'none'
            })),
            state('moving', style({
                opacity: 1,
                display: 'block'
            })),
            transition('still <=> moving', animate('500ms ease-in'))
        ]),
        trigger('wide', [
            state('still', style({
                width: '280px',
            })),
            state('moving', style({
                width: '580px',
            })),
            transition('moving => still', animate('300ms ease-out')),
            transition('still => moving', animate('500ms ease-in', keyframes([
                style({width: '280px', offset: 0}),
                style({width: '500px', offset: 0.2}),
                style({width: '700px', offset: 0.4}),
                style({width: '550px', offset: 0.6}),
                style({width: '620px', offset: 0.8}),
                style({width: '580px', offset: 1}),
            ])))
        ])
    ]
})

export class HeroModalComponent implements OnInit {
    @Input() hero: Hero;
    state: String = 'still';
    expand = document.getElementById('expand');

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
            desc: hero.desc
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

    animate(){
        /*if(this.state === 'still') {
            this.expand.innerHTML = '▶';
        } else {
            this.expand.innerHTML = '◀';
        }*/
        this.state = (this.state === 'still' ? 'moving' : 'still');
    }

    closeModal(){
        document.getElementById('modal').style.display = 'none';
        this.state = 'still';
    }
}
