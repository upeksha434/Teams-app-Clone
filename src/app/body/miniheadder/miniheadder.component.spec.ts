import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniheadderComponent } from './miniheadder.component';

describe('MiniheadderComponent', () => {
  let component: MiniheadderComponent;
  let fixture: ComponentFixture<MiniheadderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniheadderComponent]
    });
    fixture = TestBed.createComponent(MiniheadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
