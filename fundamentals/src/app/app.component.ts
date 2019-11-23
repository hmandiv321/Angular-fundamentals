import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = [
    {id: 1, name: 'topic1'},
    {id: 2, name: 'topic2'},
    {id: 3, name: 'topic3'},
    {id: 4, name: 'topic4'}
  ];
}
