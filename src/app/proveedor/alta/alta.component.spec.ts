import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaProveedor } from './alta.component';

describe('AltaComponent', () => {
  let component: AltaProveedor;
  let fixture: ComponentFixture<AltaProveedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaProveedor ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaProveedor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
