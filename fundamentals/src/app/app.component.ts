import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [];

  doWeHaveAnyCourses() {
    return this.courses.length > 0;
  }
}
