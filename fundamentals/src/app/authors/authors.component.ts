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
   // Template Variables
   onKeyUp(email) {
    console.log(email);
   }

  ngOnInit() {
  }

}
