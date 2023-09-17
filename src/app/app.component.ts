import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Movies App';

  today: Date = new Date()

  imageUrl: string = 'https://dotnethow.net/images/movies/movie-1.jpeg'
  imageWidth: number = 100

  multipleClasses = 'sample-color sample'

  price: number = 10
  sellingPrice: number = 15.30
}
