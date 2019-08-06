import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chiled2Component } from './chiled2.component';

describe('Chiled2Component', () => {
  let component: Chiled2Component;
  let fixture: ComponentFixture<Chiled2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chiled2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chiled2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
