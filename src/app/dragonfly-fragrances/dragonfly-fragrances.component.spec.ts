import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonflyFragrancesComponent } from './dragonfly-fragrances.component';

describe('DragonflyFragrancesComponent', () => {
  let component: DragonflyFragrancesComponent;
  let fixture: ComponentFixture<DragonflyFragrancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonflyFragrancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonflyFragrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
