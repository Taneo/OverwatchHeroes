import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { Role } from './hero';
import { HeroService } from './hero.service';

const ROLES: Role[] = [
    {id: 1, name: 'All'},
    {id: 2, name: 'Offense', icon: 'src/assets/img/offense.svg'},
    {id: 3, name: 'Defense', icon: 'src/assets/img/defense.svg'},
    {id: 4, name: 'Tank', icon: 'src/assets/img/tank.svg'},
    {id: 5, name: 'Support', icon: 'src/assets/img/support.svg'},
];



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    template:   `<h1><img src="src/assets/img/owlogo.png" alt="overwatch"></h1>
                <main>
                    <div class="group">
						<button class="roleButton" [class.selectedRole]="role.id === selectedRole" *ngFor="let role of roles"
								(click)="onSelectRole(role.id)">
                            <span>
                                <img *ngIf="role.icon !== s" src="{{role.icon}}" alt="{{role.name}}" style="width: 16px">
                                {{role.name}}
                            </span>
						</button>
                    </div>
	            	<hero-detail [hero]="selectedHero"></hero-detail>
                    <div class="flex-container hero">
                        <ng-container *ngFor="let hero of heroes">
							<div class="item" [class.selected]="hero === selectedHero" *ngIf="hero.roleid === selectedRole" (click)="onSelectHero(hero)">
								<img src="{{hero.img}}" alt="">
								<div class="heroname">
                                    {{hero.name}}
                                </div>
							</div>
							<div class="item" [class.selected]="hero === selectedHero"
								 *ngIf="selectedRole !== 2 && selectedRole !== 3 && selectedRole !== 4 && selectedRole !== 5"
								 (click)="onSelectHero(hero)">
								<img src="{{hero.img}}" alt="">
								<div class="heroname">
									{{hero.name}}
								</div>
							</div>                            
                        </ng-container>
                    </div>
                </main>
    `,
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    selectedHero: Hero;
    selectedRole = 1;
    heroes: Hero[];
    roles = ROLES;

    constructor(private heroService: HeroService){}

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
}







