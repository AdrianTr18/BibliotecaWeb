import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RarticulosComponent } from './rarticulos.component';

describe('RarticulosComponent', () => {
  let component: RarticulosComponent;
  let fixture: ComponentFixture<RarticulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RarticulosComponent]
    });
    fixture = TestBed.createComponent(RarticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
