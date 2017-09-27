import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadCardComponent } from './road-card.component';

describe('RoadCardComponent', () => {
  let component: RoadCardComponent;
  let fixture: ComponentFixture<RoadCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
