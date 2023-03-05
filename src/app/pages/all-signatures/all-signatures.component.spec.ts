import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSignaturesComponent } from './all-signatures.component';

describe('AllSignaturesComponent', () => {
  let component: AllSignaturesComponent;
  let fixture: ComponentFixture<AllSignaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSignaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSignaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
