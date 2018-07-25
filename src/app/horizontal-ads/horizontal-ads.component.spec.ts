import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalAdsComponent } from './horizontal-ads.component';

describe('HorizontalAdsComponent', () => {
  let component: HorizontalAdsComponent;
  let fixture: ComponentFixture<HorizontalAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
