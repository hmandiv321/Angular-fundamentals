import { Component } from '@angular/core';
import { FavouriteComponentArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFav: true
  };
  /**
   * Getting the event from change event
   */
  onFavoriteChanged(eventArgs: FavouriteComponentArgs) {
    console.log('Favorite changed: ', eventArgs);
  }
}
