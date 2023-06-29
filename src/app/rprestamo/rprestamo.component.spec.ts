import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RprestamoComponent } from './rprestamo.component';

describe('RprestamoComponent', () => {
  let component: RprestamoComponent;
  let fixture: ComponentFixture<RprestamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RprestamoComponent]
    });
    fixture = TestBed.createComponent(RprestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
