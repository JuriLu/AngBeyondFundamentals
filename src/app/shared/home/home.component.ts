import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  successColor: string = 'text text-success'
  errorColor: string = 'text text-danger'
  isSuccess: boolean = false

}
