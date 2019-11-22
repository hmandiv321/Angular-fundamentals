import { Component } from '@angular/core';
import { TestEventArgs } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

fav = {
  active: true,
  userClicks: 10
};

onChange(eventArgs: TestEventArgs) {
  this.fav.active = !this.fav.active;
  this.fav.userClicks++;
}
}
