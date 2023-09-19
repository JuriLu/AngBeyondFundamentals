import { Component } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  movieTitle:string = ''

  constructor(
    private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((param:Params):void =>{
      this.movieTitle = param['movieTitle']
    })
  }

}
