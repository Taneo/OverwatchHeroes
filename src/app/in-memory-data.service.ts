
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {id: 1, roleid: 2, name: 'Genji', img: 'src/assets/img/hero/genji.png'},
            {id: 2, roleid: 2, name: 'McCree', img: 'src/assets/img/hero/mccree.png'},
            {id: 3, roleid: 2, name: 'Pharah', img: 'src/assets/img/hero/pharah.png'},
            {id: 4, roleid: 2, name: 'Reaper', img: 'src/assets/img/hero/reaper.png'},
            {id: 5, roleid: 2, name: 'Soldier:76', img: 'src/assets/img/hero/soldier.png'},
            {id: 6, roleid: 2, name: 'Sombra', img: 'src/assets/img/hero/sombra.png'},
            {id: 7, roleid: 2, name: 'Tracer', img: 'src/assets/img/hero/tracer.png'},
            {id: 8, roleid: 3, name: 'Bastion', img: 'src/assets/img/hero/bastion.png'},
            {id: 9, roleid: 3, name: 'Hanzo', img: 'src/assets/img/hero/hanzo.png'},
            {id: 10, roleid: 3, name: 'Junkrat',  img: 'src/assets/img/hero/junkrat.png'},
            {id: 11, roleid: 3, name: 'Mei',  img: 'src/assets/img/hero/mei.png'},
            {id: 12, roleid: 3, name: 'Torbjörn', img: 'src/assets/img/hero/torbjorn.png'},
            {id: 13, roleid: 3, name: 'Widowmaker', img: 'src/assets/img/hero/widowmaker.png'},
            {id: 14, roleid: 4, name: 'D.Va', img: 'src/assets/img/hero/dva.png'},
            {id: 15, roleid: 4, name: 'Orisa', img: 'src/assets/img/hero/orisa.png'},
            {id: 16, roleid: 4, name: 'Reinhardt', img: 'src/assets/img/hero/reinhardt.png'},
            {id: 17, roleid: 4, name: 'Roadhog',  img: 'src/assets/img/hero/roadhog.png'},
            {id: 18, roleid: 4, name: 'Winston',  img: 'src/assets/img/hero/winston.png'},
            {id: 19, roleid: 4, name: 'Zarya', img: 'src/assets/img/hero/zarya.png'},
            {id: 20, roleid: 5, name: 'Ana',  img: 'src/assets/img/hero/ana.png'},
            {id: 21, roleid: 5, name: 'Lucio', img: 'src/assets/img/hero/lucio.png'},
            {id: 22, roleid: 5, name: 'Mercy', img: 'src/assets/img/hero/mercy.png'},
            {id: 23, roleid: 5, name: 'Symmetra', img: 'src/assets/img/hero/symmetra.png'},
            {id: 24, roleid: 5, name: 'Zenyatta', img: 'src/assets/img/hero/zenyatta.png'},
        ];
        return {heroes};
    }
}
