import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuizqComponent } from './menuizq.component';

describe('MenuizqComponent', () => {
  let component: MenuizqComponent;
  let fixture: ComponentFixture<MenuizqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuizqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuizqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
