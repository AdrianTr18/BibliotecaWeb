import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RempleadosComponent } from './rempleados.component';

describe('RempleadosComponent', () => {
  let component: RempleadosComponent;
  let fixture: ComponentFixture<RempleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RempleadosComponent]
    });
    fixture = TestBed.createComponent(RempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
