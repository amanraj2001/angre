import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkdataComponent } from './parkdata.component';

describe('ParkdataComponent', () => {
  let component: ParkdataComponent;
  let fixture: ComponentFixture<ParkdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
