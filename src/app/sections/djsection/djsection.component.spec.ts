import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjsectionComponent } from './djsection.component';

describe('DjsectionComponent', () => {
  let component: DjsectionComponent;
  let fixture: ComponentFixture<DjsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
