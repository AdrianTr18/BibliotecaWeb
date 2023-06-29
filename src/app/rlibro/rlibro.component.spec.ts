import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlibroComponent } from './rlibro.component';

describe('RlibroComponent', () => {
  let component: RlibroComponent;
  let fixture: ComponentFixture<RlibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RlibroComponent]
    });
    fixture = TestBed.createComponent(RlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
