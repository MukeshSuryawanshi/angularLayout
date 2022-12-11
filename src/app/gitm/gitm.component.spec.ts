import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitmComponent } from './gitm.component';

describe('GitmComponent', () => {
  let component: GitmComponent;
  let fixture: ComponentFixture<GitmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
