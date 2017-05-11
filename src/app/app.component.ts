import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
	styleUrls: ['./app.component.css'],
    template: `
		<h1><img src="src/assets/img/owlogo.png" alt="overwatch"></h1>
        <nav>
			<button class="roleButton" routerLink="/dashboard" routerLinkActive="active">Dashboard</button>
			<button class="roleButton" routerLink="/heroes" routerLinkActive="active">Heroes</button>
		</nav>
		<router-outlet></router-outlet>
    `
})

export class AppComponent {
    title = 'ov';
}
