import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaarServicesComponent } from './kaar-services.component';

describe('KaarServicesComponent', () => {
  let component: KaarServicesComponent;
  let fixture: ComponentFixture<KaarServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaarServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaarServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
