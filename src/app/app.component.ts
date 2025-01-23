
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  imports : [],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string ;
  logo: string = '../assets/img/logo.png' ;
  name: string = 'Todd';

  // isHappy: boolean = false;
  // numberOne: number = 1;
  // numberTwo: number = 2;
  constructor() {
    this.title = 'lite-store-main'
  }

}
