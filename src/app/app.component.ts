
import { CommonModule, NgClass, NgFor} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  imports : [ CommonModule, FormsModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   title: string ;
  // logo: string = '../assets/img/logo.png' ;
  name: string = 'Todd';
  handleClick(){
    this.name = 'Motto' ;
  }
  handleChange(value: string){
    this.name = value;
  }


  // isHappy: boolean = false;
  // numberOne: number = 1;
  // numberTwo: number = 2;
  constructor() {
    this.title = 'lite-store-main'
  }

}
