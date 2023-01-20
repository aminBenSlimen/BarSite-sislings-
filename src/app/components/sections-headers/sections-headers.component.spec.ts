import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsHeadersComponent } from './sections-headers.component';

describe('SectionsHeadersComponent', () => {
  let component: SectionsHeadersComponent;
  let fixture: ComponentFixture<SectionsHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionsHeadersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionsHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
