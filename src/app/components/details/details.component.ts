import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit,OnChanges{

  constructor() {
  }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
