import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmiereDetailsComponent } from './infirmiere-details.component';

describe('InfirmiereDetailsComponent', () => {
  let component: InfirmiereDetailsComponent;
  let fixture: ComponentFixture<InfirmiereDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfirmiereDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfirmiereDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
