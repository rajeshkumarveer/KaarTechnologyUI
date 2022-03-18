import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaarComponent } from './kaar.component';

describe('KaarComponent', () => {
  let component: KaarComponent;
  let fixture: ComponentFixture<KaarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
