import {Component} from '@angular/core';
import { Hero } from './hero';
import { Role } from './hero';

const HEROES: Hero[] = [
    {id: 1, roleid: 2, name: 'Genji'},
    {id: 2, roleid: 2, name: 'McCree'},
    {id: 3, roleid: 2, name: 'Pharah'},
    {id: 4, roleid: 2, name: 'Reaper'},
    {id: 5, roleid: 2, name: 'Soldier:76'},
    {id: 6, roleid: 2, name: 'Sombra'},
    {id: 7, roleid: 2, name: 'Tracer'},
    {id: 8, roleid: 3, name: 'Bastion'},
    {id: 9, roleid: 3, name: 'Hanzo'},
    {id: 10, roleid: 3, name: 'Junkrat'},
    {id: 11, roleid: 3, name: 'Mei'},
    {id: 12, roleid: 3, name: 'Torbjörn'},
    {id: 13, roleid: 3, name: 'Widowmaker'},
    {id: 14, roleid: 4, name: 'D.Va'},
    {id: 15, roleid: 4, name: 'Orisa'},
    {id: 16, roleid: 4, name: 'Reinhardt'},
    {id: 17, roleid: 4, name: 'Roadhog'},
    {id: 18, roleid: 4, name: 'Winston'},
    {id: 19, roleid: 4, name: 'Zarya'},
    {id: 20, roleid: 5, name: 'Ana'},
    {id: 21, roleid: 5, name: 'Lucio'},
    {id: 22, roleid: 5, name: 'Mercy'},
    {id: 23, roleid: 5, name: 'Symmetra'},
    {id: 24, roleid: 5, name: 'Zenyatta'},
];

const ROLES: Role[] = [
    {id: 1, name: 'All'},
    {id: 2, name: 'Offense'},
    {id: 3, name: 'Defense'},
    {id: 4, name: 'Tank'},
    {id: 5, name: 'Support'},
];



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    template:   `<h1>{{title}}</h1>
                <h2>My Heroes</h2>
	            <button class="roleButton" [class.selectedRole]="role.id === selectedRole" *ngFor="let role of roles" 
                        (click)="onSelectRole(role.id)">
	            	<span>{{role.name}}</span>
	            </button>
	            <hero-detail [hero]="selectedHero"></hero-detail>
	            <div class="heroes">
	            	<ng-container *ngFor="let hero of heroes" >
	            		<div [class.selected]="hero === selectedHero" *ngIf="hero.roleid === selectedRole" (click)="onSelectHero(hero)">
	            			<span class="badge">{{hero.id}}</span> {{hero.name}}
	            		</div>
	            		<div [class.selected]="hero === selectedHero" 
                             *ngIf="selectedRole !== 2 && selectedRole !== 3 && selectedRole !== 4 && selectedRole !== 5" 
                             (click)="onSelectHero(hero)">
	            			<span class="badge">{{hero.id}}</span> {{hero.name}}
	            		</div>
	            	</ng-container>
	            </div>
    `
})

export class AppComponent {
    title = 'Overwatch Heroes';
    selectedHero: Hero;
    selectedRole = 1;
    heroes = HEROES;
    roles = ROLES;

    onSelectHero(hero: Hero): void {
        this.selectedHero = hero;
    }

    onSelectRole(nr: number): void {
        this.selectedRole = nr;
    }
}







