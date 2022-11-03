import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title :string = 'Lesson 1 Demo';
  isBtnClicked:boolean ;


  textAreaContent:string;
  constructor(){
  }
}
