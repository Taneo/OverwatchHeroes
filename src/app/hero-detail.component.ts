import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';

import {HeroService} from './hero.service';
import {Hero} from './hero';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['hero-detail.component.css'],
    template: `		
		<div *ngIf="hero">
			<h2>{{hero.name}} details!</h2>
			<table>
				<tr>
					<th>ID:</th>
					<td>{{hero.id}}</td>
				</tr>
				<tr>
					<th>Name:</th>
					<td><input type = "text" [(ngModel)] = "hero.name" placeholder = "name"/></td>
				</tr>
			</table>
			<button class = "roleButton" (click) = "goBack()">Back</button>
		</div>
    `
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location) {
    }
}
