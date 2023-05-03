import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingtabComponent } from './parkingtab.component';

describe('ParkingtabComponent', () => {
  let component: ParkingtabComponent;
  let fixture: ComponentFixture<ParkingtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingtabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
