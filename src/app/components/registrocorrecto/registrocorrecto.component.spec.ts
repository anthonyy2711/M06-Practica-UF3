import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrocorrectoComponent } from './registrocorrecto.component';

describe('RegistrocorrectoComponent', () => {
  let component: RegistrocorrectoComponent;
  let fixture: ComponentFixture<RegistrocorrectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrocorrectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrocorrectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
