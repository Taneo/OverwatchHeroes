import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
    private heroesUrl = 'http://localhost:3000';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
        console.log('Hero Service initialized');
    }

    getHeroes() {
        return this.http.get(this.heroesUrl + '/api/heroes')
            .map(res => res.json());
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


    getHero(id): Promise<Hero> {
        const url = this.heroesUrl + '/api/hero/' + id;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    update(hero) {
        const url = this.heroesUrl + '/api/hero/' + hero._id;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .map(res => res.json());
    }

    create(hero) {
        const url = this.heroesUrl + '/api/hero/';
        return this.http
            .post(url, JSON.stringify(hero), {headers: this.headers})
            .map(res => res.json());
    }

    delete(id) {
        const url = this.heroesUrl + '/api/hero/' + id;
        return this.http.delete(url).map(res => res.json());
    }
}
