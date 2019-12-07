import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts;
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = response;
      });
  }
}
