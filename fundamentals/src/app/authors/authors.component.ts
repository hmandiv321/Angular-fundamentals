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
   Test = {
     title: 'Test',
     commaExample: 301324,
     rating: 4.7654,
     price: 450.68,
     date: new Date(2019, 11, 19)
   };
  ngOnInit() {
  }

}
