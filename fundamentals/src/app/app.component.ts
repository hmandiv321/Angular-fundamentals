import { Component } from '@angular/core';

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
  onFavoriteChanged(eventArgs) {
    console.log('Favorite changed: ', eventArgs);
  }
}
