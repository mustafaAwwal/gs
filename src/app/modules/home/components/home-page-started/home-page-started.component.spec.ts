import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageStartedComponent } from './home-page-started.component';

describe('HomePageStartedComponent', () => {
  let component: HomePageStartedComponent;
  let fixture: ComponentFixture<HomePageStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
