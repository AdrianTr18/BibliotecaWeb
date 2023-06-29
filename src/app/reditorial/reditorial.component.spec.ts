import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReditorialComponent } from './reditorial.component';

describe('ReditorialComponent', () => {
  let component: ReditorialComponent;
  let fixture: ComponentFixture<ReditorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReditorialComponent]
    });
    fixture = TestBed.createComponent(ReditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
