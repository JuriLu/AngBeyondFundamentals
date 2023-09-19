import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit,OnChanges{

  movieId = ''
  constructor(
    private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((param:Params):void=>{
      this.movieId = param['id']

      console.log('Movie ID' + this.movieId)
    })
  }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
