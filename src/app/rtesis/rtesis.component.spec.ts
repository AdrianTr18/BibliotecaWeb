import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtesisComponent } from './rtesis.component';

describe('RtesisComponent', () => {
  let component: RtesisComponent;
  let fixture: ComponentFixture<RtesisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RtesisComponent]
    });
    fixture = TestBed.createComponent(RtesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
