import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movie = {
    title: 'Captain America: Civil War',
    overview: 'Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.',
    premiere: '05/06/2016',
    posterImage: 'https://www.themoviedb.org/t/p/w1280/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
