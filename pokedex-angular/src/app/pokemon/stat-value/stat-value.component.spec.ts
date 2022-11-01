import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatValueComponent } from './stat-value.component';

describe('StatValueComponent', () => {
  let component: StatValueComponent;
  let fixture: ComponentFixture<StatValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
