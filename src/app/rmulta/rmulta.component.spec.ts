import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmultaComponent } from './rmulta.component';

describe('RmultaComponent', () => {
  let component: RmultaComponent;
  let fixture: ComponentFixture<RmultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RmultaComponent]
    });
    fixture = TestBed.createComponent(RmultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
