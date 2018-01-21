import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Posts } from './posts';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }

  addPost(post: Posts): Observable<Posts> {
    return this.http.post<Posts>('https://jsonplaceholder.typicode.com/posts', post);
  }

}