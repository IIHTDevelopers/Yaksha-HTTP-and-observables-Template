import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostFormComponent } from './post-form.component';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('PostFormComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;
  let httpService: HttpService;
  let route: ActivatedRoute;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostFormComponent],
      providers: [
        {
          provide: HttpService,
          useValue: {
            createPost: jest.fn(),
            updatePost: jest.fn(),
            getPosts: jest.fn()
          }
        },
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: 1 }) }
        },
        {
          provide: Router,
          useValue: { navigate: jest.fn() }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    httpService = TestBed.inject(HttpService);
    route = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should display form fields (title, body) in the HTML', () => {
      // Check if title input and body textarea exist
      const titleInput: HTMLInputElement = fixture.debugElement.query(By.css('input[name="title"]')).nativeElement;
      const bodyTextarea: HTMLTextAreaElement = fixture.debugElement.query(By.css('textarea[name="body"]')).nativeElement;

      expect(titleInput).toBeTruthy();
      expect(bodyTextarea).toBeTruthy();
    });
  });
});
