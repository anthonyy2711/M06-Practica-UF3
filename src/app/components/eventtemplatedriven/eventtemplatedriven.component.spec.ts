import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventtemplatedrivenComponent } from './eventtemplatedriven.component';

describe('EventtemplatedrivenComponent', () => {
  let component: EventtemplatedrivenComponent;
  let fixture: ComponentFixture<EventtemplatedrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventtemplatedrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventtemplatedrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
