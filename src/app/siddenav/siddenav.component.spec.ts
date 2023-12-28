import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiddenavComponent } from './siddenav.component';

describe('SiddenavComponent', () => {
  let component: SiddenavComponent;
  let fixture: ComponentFixture<SiddenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiddenavComponent]
    });
    fixture = TestBed.createComponent(SiddenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
