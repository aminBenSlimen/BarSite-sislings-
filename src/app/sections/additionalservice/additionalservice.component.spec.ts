import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalserviceComponent } from './additionalservice.component';

describe('AdditionalserviceComponent', () => {
  let component: AdditionalserviceComponent;
  let fixture: ComponentFixture<AdditionalserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
