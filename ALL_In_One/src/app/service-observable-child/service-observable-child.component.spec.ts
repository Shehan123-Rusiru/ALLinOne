import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceObservableChildComponent } from './service-observable-child.component';

describe('ServiceObservableChildComponent', () => {
  let component: ServiceObservableChildComponent;
  let fixture: ComponentFixture<ServiceObservableChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceObservableChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceObservableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
