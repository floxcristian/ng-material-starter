import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideSliderComponent } from './aside-slider.component';

describe('AsideSliderComponent', () => {
  let component: AsideSliderComponent;
  let fixture: ComponentFixture<AsideSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
