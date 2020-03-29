
import {Component } from '@angular/core'

@Component(
  {
    selector:'app-morgan',
    templateUrl:'./morgan.component.html',
    styleUrls: ['./morgan.component.css']
  }
)
export class MorganComponent {
  fname: string = "morgan";
  lname: string ="Kennedy";
  getLastName(){
    return this.lname;
  }

  getFirstName(){
    return this.fname;
  }
}
