import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
   }
   /* If this email variable ispopulated eg. email = "me@example"
   then the input field will show me@example as the html has
   <input [value]="email" (keyup.enter)="onKeyUp()">
   But with only property binding aka "one way binding"
   changes to from the dom wont be reflected in the component
   we use two way binding for that
   */
  // Two-way binding
  /**
   * Angular special syntax for two way binding==>
   * <input [(ngModel)]="email" (keyup.enter)="onKeyUp()">
   */
   email = 'me@example.com';
   twoWay = 'me@example.com';
   onKeyUpOneWayBinding() {
    console.log('One way binding', this.email);
   }

   onKeyUpTwoWayBinding() {
    console.log('Two way binding', this.twoWay);
   }

  ngOnInit() {
  }

}
