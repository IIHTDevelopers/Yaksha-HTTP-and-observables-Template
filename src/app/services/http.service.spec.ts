import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';
import { of } from 'rxjs';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService]
    });
    service = TestBed.inject(HttpService);
  });

  describe('business', () => {
    it('should return the list of posts', () => {
      const expectedPosts = [
        { id: 1, title: 'Post 1', body: 'This is the body of Post 1' },
        { id: 2, title: 'Post 2', body: 'This is the body of Post 2' },
        { id: 3, title: 'Post 3', body: 'This is the body of Post 3' }
      ];

      service.getPosts().subscribe((posts: any) => {
        expect(posts).toEqual(expectedPosts);
      });
    });

    it('should create a new post and return the new post', () => {
      const newPost = { title: 'Post 4', body: 'This is the body of Post 4' };

      service.createPost(newPost).subscribe((createdPost: any) => {
        expect(createdPost).toEqual({ ...newPost, id: 4 });
      });

      service.getPosts().subscribe((posts: string | any[]) => {
        expect(posts.length).toBe(4);
      });
    });

    it('should update an existing post and return the updated post', () => {
      const updatedPost = { title: 'Updated Post 1', body: 'Updated body of Post 1' };
      const postId = 1;

      service.updatePost(postId, updatedPost).subscribe((updated: any) => {
        expect(updated).toEqual({ ...updatedPost, id: postId });
      });

      service.getPosts().subscribe((posts: any[]) => {
        const updatedPostInArray = posts.find((post: { id: number; }) => post.id === postId);
        expect(updatedPostInArray?.title).toBe('Updated Post 1');
      });
    });

    it('should delete a post and return the deleted post', () => {
      const postIdToDelete = 2;

      service.deletePost(postIdToDelete).subscribe((deletedPost: any) => {
        expect(deletedPost).toEqual([{ id: postIdToDelete, title: 'Post 2', body: 'This is the body of Post 2' }]);
      });

      service.getPosts().subscribe((posts: any[]) => {
        expect(posts.length).toBe(2);
        const deletedPostInArray = posts.find((post: { id: number; }) => post.id === postIdToDelete);
        expect(deletedPostInArray).toBeUndefined();
      });
    });
  });
});
