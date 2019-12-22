import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageFeaturesComponent } from './home-page-features.component';

describe('HomePageFeaturesComponent', () => {
  let component: HomePageFeaturesComponent;
  let fixture: ComponentFixture<HomePageFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
