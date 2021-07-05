import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterCareComponent } from './after-care.component';

describe('AfterCareComponent', () => {
  let component: AfterCareComponent;
  let fixture: ComponentFixture<AfterCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
