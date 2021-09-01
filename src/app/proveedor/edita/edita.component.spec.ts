import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaComponent } from './edita.component';

describe('EditaComponent', () => {
  let component: EditaComponent;
  let fixture: ComponentFixture<EditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
