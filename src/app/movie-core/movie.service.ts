import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies() {
    return [
      {
        title: 'Captain America: Civil War',
        overview: 'Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.',
        premiere: '05/06/2016',
        posterImage: 'https://www.themoviedb.org/t/p/w1280/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg',
      },
      {
        title: 'Thor: The Dark World',
        overview: 'Thor fights to restore order across the cosmos… but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.',
        premiere: '11/08/2013',
        posterImage: 'https://www.themoviedb.org/t/p/w1280/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg',
      },
      {
        title: 'Iron Man',
        overview: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
        premiere: '05/02/2008',
        posterImage: 'https://www.themoviedb.org/t/p/w1280/78lPtwv72eTNqFW9COBYI0dWDJa.jpg',
      }
    ];
  }
}
