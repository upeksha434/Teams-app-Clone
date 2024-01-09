import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SubnavComponent } from './subnav.component';

describe('SubnavComponent', () => {
  let component: SubnavComponent;
  let fixture: ComponentFixture<SubnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MatToolbarModule],
      declarations: [SubnavComponent]

    });
    fixture = TestBed.createComponent(SubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
