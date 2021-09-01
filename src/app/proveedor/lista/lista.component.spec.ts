import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProveedor } from './lista.component';

describe('ListaComponent', () => {
  let component: ListaProveedor;
  let fixture: ComponentFixture<ListaProveedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProveedor ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProveedor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
