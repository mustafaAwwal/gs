import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageJumbotronComponent } from './home-page-jumbotron.component';

describe('HomePageJumbotronComponent', () => {
  let component: HomePageJumbotronComponent;
  let fixture: ComponentFixture<HomePageJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
