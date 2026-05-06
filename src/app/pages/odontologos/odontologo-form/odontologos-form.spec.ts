import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdontologosForm } from './odontologos-form';

describe('OdontologosForm', () => {
  let component: OdontologosForm;
  let fixture: ComponentFixture<OdontologosForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdontologosForm],
    }).compileComponents();

    fixture = TestBed.createComponent(OdontologosForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});