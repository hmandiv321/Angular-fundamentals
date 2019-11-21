import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
/**
 * Want to mark this field
 * as an input property for this component
 */
 @Input() isFav: boolean;
  constructor() { }

  makeStarFullOrempty() {
    this.isFav = !this.isFav;
  }

  ngOnInit() {
  }

}
