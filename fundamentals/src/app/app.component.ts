import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics;
  loadCourses() {
    this.topics = [
      {id: 0, name: 'topic0'},
      {id: 1, name: 'topic1'},
      {id: 2, name: 'topic2'},
      {id: 3, name: 'topic3'}
    ];
  }

  trackTopic(index, topic) {
    return topic ? topic.id : undefined;
  }
}
