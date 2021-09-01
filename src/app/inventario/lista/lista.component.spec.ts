import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInventario } from './lista.component';

describe('ListaComponent', () => {
  let component: ListaInventario;
  let fixture: ComponentFixture<ListaInventario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaInventario ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInventario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
