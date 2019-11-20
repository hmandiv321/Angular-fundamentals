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
   // angular way no need for the $event to be passed
   onKeyUp() {
    // Traditional way of implementing this
    /* <input (keyup)="onKeyUp($event)">
    if ($event.keyCode === 13) {
      console.log('Enter was pressed');
    }*/

    // Angular way in html
    /*<input (keyup.enter)="onKeyUp()"> */
    console.log('Enter was pressed');
   }

  ngOnInit() {
  }

}
