import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // Simulating a local collection (in-memory database)
  private posts: any[] = [
    { id: 1, title: 'Post 1', body: 'This is the body of Post 1' },
    { id: 2, title: 'Post 2', body: 'This is the body of Post 2' },
    { id: 3, title: 'Post 3', body: 'This is the body of Post 3' },
  ];

  constructor() { }

  // Get posts
  getPosts(): any {
    null;
  }

  // Create a post
  createPost(post: any): any {
    null;
  }

  // Update a post
  updatePost(id: number, post: any): any {
    null;
  }

  // Delete a post
  deletePost(id: number): any {
    null;
  }
}
