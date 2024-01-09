import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiddenavComponent } from './siddenav.component';

import { ClarityIcons, userIcon, circleIcon, bellIcon,usersIcon} from '@cds/core/icon';
describe('SiddenavComponent', () => {
  let component: SiddenavComponent;
  let fixture: ComponentFixture<SiddenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiddenavComponent],
    });

    fixture = TestBed.createComponent(SiddenavComponent);
    component = fixture.componentInstance;

    ClarityIcons.addIcons(userIcon, circleIcon, bellIcon,userIcon);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update pressed state on icon click', () => {
    const iconData = { icon: 'user', label: 'Teams' };

    component.onIconClick(iconData);

    expect(component.navData.some(item => item.pressed)).toBe(false);
    expect(component.selectedIcon).toEqual(iconData);
  });

  it('should update pressed state to false for other icons on icon click', () => {
    component.navData = [
      { icon: 'user', label: 'Teams', pressed: true},
      { icon: 'bell', label: 'Activity', pressed: true},
    ];
    const iconData = { icon: 'bell', label: 'Activity' };

    component.onIconClick(iconData);

    expect(component.navData.every(item => item.pressed === (item === iconData))).toBe(true);
    expect(component.selectedIcon).toEqual(iconData);
  });
});
