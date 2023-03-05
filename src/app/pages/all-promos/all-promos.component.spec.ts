import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPromosComponent } from './all-promos.component';

describe('AllPromosComponent', () => {
  let component: AllPromosComponent;
  let fixture: ComponentFixture<AllPromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPromosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
