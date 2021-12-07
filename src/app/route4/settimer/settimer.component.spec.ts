import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettimerComponent } from './settimer.component';

describe('SettimerComponent', () => {
  let component: SettimerComponent;
  let fixture: ComponentFixture<SettimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
