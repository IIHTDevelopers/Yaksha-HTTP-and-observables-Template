import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  errorMessage!: string;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  loadPosts(): void {
  }

  deletePost(id: number): void {
  }
}
