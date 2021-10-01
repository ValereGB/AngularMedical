import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInfirmiereComponent } from './create-infirmiere.component';

describe('CreateInfirmiereComponent', () => {
  let component: CreateInfirmiereComponent;
  let fixture: ComponentFixture<CreateInfirmiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInfirmiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInfirmiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
