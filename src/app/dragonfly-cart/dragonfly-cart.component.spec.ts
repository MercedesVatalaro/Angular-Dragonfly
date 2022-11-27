import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonflyCartComponent } from './dragonfly-cart.component';

describe('DragonflyCartComponent', () => {
  let component: DragonflyCartComponent;
  let fixture: ComponentFixture<DragonflyCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonflyCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonflyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
