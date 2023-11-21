import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have specific elements in DOM', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.palavra-1'))?.toBeTruthy();
    expect(compiled.querySelector('.palavra-2'))?.toBeTruthy();
    expect(compiled.querySelector('.palavra-3'))?.toBeTruthy();
    expect(compiled.querySelector('.subtitle'))?.toBeTruthy();
  });
});
