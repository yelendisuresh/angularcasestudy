import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimsestampsComponent } from './timsestamps.component';

describe('TimsestampsComponent', () => {
  let component: TimsestampsComponent;
  let fixture: ComponentFixture<TimsestampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimsestampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimsestampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
