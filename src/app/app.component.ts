import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
	styleUrls: ['./app.component.css'],
    template: `
		<h1><img src="src/assets/img/owlogo.png" alt="overwatch"></h1>
        <nav>
			<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
			<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
    `
})

export class AppComponent {
    title = 'ov';
}
