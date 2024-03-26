import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalViewComponent } from './carousal-view.component';

describe('CarousalViewComponent', () => {
  let component: CarousalViewComponent;
  let fixture: ComponentFixture<CarousalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarousalViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarousalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
