import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonflyContactComponent } from './dragonfly-contact.component';

describe('DragonflyContactComponent', () => {
  let component: DragonflyContactComponent;
  let fixture: ComponentFixture<DragonflyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonflyContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonflyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
