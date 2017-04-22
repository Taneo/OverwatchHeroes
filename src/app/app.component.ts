import {Component} from '@angular/core';

export class Role {
    id: number;
    name: string;
}

export class Hero {
    id: number;
    roleid: number;
    name: string;
}

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
	            <div *ngIf="selectedHero">
	            	<h2>{{selectedHero.name}} details!</h2>
	            	<div><label>id: </label>{{selectedHero.id}}</div>
	            	<div>
	            		<label>name: </label>
	            		<input [(ngModel)]="selectedHero.name" placeholder="name"/>
	            	</div>
	            </div>
                <button *ngFor="let role of roles">
                    <span class="badge">{{role.name}}</span>
                </button>
                <ul class="heroes">
                    <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
                        <span class="badge">{{hero.id}}</span> {{hero.name}}
                    </li>
                </ul>
	            
    `
})

export class AppComponent {
    title = 'Overwatch Heroes';
    selectedHero: Hero;
    heroes = HEROES;
    roles = ROLES;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}







