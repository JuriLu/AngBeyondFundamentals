import {Component} from '@angular/core';

interface MovieInterface {
  imageUrl:string,
  title:string,
  actors:string,
  year:string,
  rate:number,
  trophy:number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() {
  }

  fanFavouriteMovies: MovieInterface[] =
    [
      {
        imageUrl: '../../../assets/images/Alien.jpg',
        title: 'Alien',
        actors: 'Movie Actor',
        year: '2023',
        rate: 9.5,
        trophy: 1
      },
      {
        imageUrl: '../../../assets/images/BlackPanther.jpg',
        title: 'BlackPanther',
        actors: 'Movie Actor',
        year: '2023',
        rate: 9.5,
        trophy: 1
      },
      {
        imageUrl: '../../../assets/images/Moonlight.jpg',
        title: 'Moonlight',
        actors: 'Movie Actor',
        year: '2023',
        rate: 9.5,
        trophy: 1
      },
      {
        imageUrl: '../../../assets/images/Oppenheimer.jpeg',
        title: 'Oppenheimer',
        actors: 'Movie Actor',
        year: '2023',
        rate: 9.5,
        trophy: 1
      },
      {
        imageUrl: '../../../assets/images/TheWalk.jpg',
        title: 'TheWalk',
        actors: 'Movie Actor',
        year: '2023',
        rate: 9.5,
        trophy: 1
      },
      {
        imageUrl: '../../../assets/images/Titanic.jpg',
        title: 'Titanic',
        actors: 'Movie Actor',
        year: '2023',
        rate: 9.5,
        trophy: 1
      },
    ]
}
