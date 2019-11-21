import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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
 @Input('isFav') isFavorite: boolean;

 /**
  * Want to mark this field
  * as an output event for this component
  */
 @Output() change = new EventEmitter();
  constructor() { }

  makeStarFullOrempty() {
    this.isFavorite = !this.isFavorite;
    // use this to raise an event
    this.change.emit();
  }

  ngOnInit() {
  }

}
