import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SVGCircleComponent } from './svgcircle.component';

describe('SVGCircleComponent', () => {
  let component: SVGCircleComponent;
  let fixture: ComponentFixture<SVGCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SVGCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SVGCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
