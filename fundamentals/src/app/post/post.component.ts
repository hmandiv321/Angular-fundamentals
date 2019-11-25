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

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
        .subscribe(response => {
          post['id'] = response;
          this.posts.splice(0, 0, post);
          console.log(response);
        });
  }
  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
	.subscribe(response => {
          console.log(response);
        });
  }
}
