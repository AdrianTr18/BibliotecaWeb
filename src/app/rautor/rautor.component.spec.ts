import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RautorComponent } from './rautor.component';

describe('RautorComponent', () => {
  let component: RautorComponent;
  let fixture: ComponentFixture<RautorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RautorComponent]
    });
    fixture = TestBed.createComponent(RautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
