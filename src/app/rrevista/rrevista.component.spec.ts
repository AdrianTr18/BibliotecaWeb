import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrevistaComponent } from './rrevista.component';

describe('RrevistaComponent', () => {
  let component: RrevistaComponent;
  let fixture: ComponentFixture<RrevistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RrevistaComponent]
    });
    fixture = TestBed.createComponent(RrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
