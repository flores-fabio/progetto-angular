import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionDatailComponent } from './mission-datail.component';

describe('MissionDatailComponent', () => {
  let component: MissionDatailComponent;
  let fixture: ComponentFixture<MissionDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionDatailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
