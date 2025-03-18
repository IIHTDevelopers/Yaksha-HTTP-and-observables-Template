import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule], // Use RouterTestingModule for testing router functionality
            declarations: [AppComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('boundary', () => {
        it('should create the app component', () => {
            expect(component).toBeTruthy();
        });

        it('should have the correct title bound in the template', () => {
            const titleElement: HTMLElement = fixture.debugElement.query(By.css('h1')).nativeElement;
            expect(titleElement.textContent).toBe('HTTP and observables');
        });

        it('should have navigation links for posts and add new post', () => {
            const navLinks = fixture.debugElement.queryAll(By.css('nav a'));
            expect(navLinks.length).toBe(2); // Check if there are exactly 2 navigation links

            const postsLink = navLinks[0].nativeElement;
            expect(postsLink.textContent).toBe('Posts List');
            expect(postsLink.getAttribute('routerLink')).toBe('/posts');

            const addLink = navLinks[1].nativeElement;
            expect(addLink.textContent).toBe('Add New Post');
            expect(addLink.getAttribute('routerLink')).toBe('/add');
        });

        it('should have a router-outlet element in the template', () => {
            const routerOutlet = fixture.debugElement.query(By.css('router-outlet'));
            expect(routerOutlet).toBeTruthy(); // Check if the <router-outlet> element is present
        });
    });
});
