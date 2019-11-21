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
    /**
     * passing the new state of the component
     * through the emitter
     * this.change.emit(this.isFavorite); or we can
     * pass objects like the example below
     */
    this.change.emit({newValue: this.isFavorite});
  }

  ngOnInit() {
  }

}
/**
 * To get compile time check and
 * intellisense use interface and use it
 * onFavoriteChanged(eventArgs: FavouriteComponentArgs) {
 * console.log('Favorite changed: ', eventArgs);
 * }
 */
export interface FavouriteComponentArgs {
  newValue: boolean;
}
