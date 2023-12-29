import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon, circleIcon, bellIcon} from '@cds/core/icon';

ClarityIcons.addIcons(userIcon, circleIcon, bellIcon);

@Component({
  selector: 'app-siddenav',
  templateUrl: './siddenav.component.html',
  styleUrls: ['./siddenav.component.css']
})

export class SiddenavComponent {
  navData: any[] = [
    {
      icon: 'bell',
      label: 'Activity',
      pressed:false,
    },
    {
      icon: 'circle',
      label: 'Teams',
      pressed:false,
    },
    // ... other initial items
  ];

  selectedIcon: { icon: string, label: string } | null = null;

  onIconClick(data: { icon: string, label: string }) {
    this.navData.forEach(item =>{
      item.pressed = item ===data && !item.pressed;
    });
    this.selectedIcon = data;
  }
}
