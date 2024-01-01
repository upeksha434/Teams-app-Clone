import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teams2Component } from './teams2.component';

describe('Teams2Component', () => {
  let component: Teams2Component;
  let fixture: ComponentFixture<Teams2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Teams2Component]
    });
    fixture = TestBed.createComponent(Teams2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
