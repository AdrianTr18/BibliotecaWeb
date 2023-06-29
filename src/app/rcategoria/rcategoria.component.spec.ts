import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcategoriaComponent } from './rcategoria.component';

describe('RcategoriaComponent', () => {
  let component: RcategoriaComponent;
  let fixture: ComponentFixture<RcategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RcategoriaComponent]
    });
    fixture = TestBed.createComponent(RcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
