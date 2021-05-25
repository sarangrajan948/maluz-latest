import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlylifeComponent } from './earlylife.component';

describe('EarlylifeComponent', () => {
  let component: EarlylifeComponent;
  let fixture: ComponentFixture<EarlylifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarlylifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlylifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
