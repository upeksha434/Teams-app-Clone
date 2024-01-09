import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon, circleIcon, bellIcon,usersIcon,chatBubbleIcon,calendarIcon,cloudIcon,phoneHandsetIcon,ellipsisVerticalIcon, ellipsisHorizontalIcon} from '@cds/core/icon';

ClarityIcons.addIcons(userIcon, circleIcon, bellIcon,userIcon,chatBubbleIcon,calendarIcon,cloudIcon,phoneHandsetIcon,ellipsisHorizontalIcon);

@Component({
  selector: 'app-siddenav',
  templateUrl: './siddenav.component.html',
  styleUrls: ['./siddenav.component.css']
})

export class SiddenavComponent {
  navData: any[] = [
    {
      icon: 'user',
      label: 'Teams',
      pressed:false,
    },
    {
      icon: 'bell',
      label: 'Activity',
      pressed:false,
    },
    {
      icon: 'chat-bubble',
      label: 'Chat',
      pressed:false,
    },
    {
      icon: 'calendar',
      label: 'Calender',
      pressed:false,
    },
    {
      icon: 'phone-handset',
      label: 'Calls',
      pressed:false,
    },
    {
      icon:'ellipsis-horizontal',
      label:'',
      pressed:false
    }

  ];

  selectedIcon: { icon: string, label: string } | null = null;

  onIconClick(data: { icon: string, label: string }) {
    this.navData.forEach(item =>{
      item.pressed = item ===data && !item.pressed;
    });
    this.selectedIcon = data;
  }
}
