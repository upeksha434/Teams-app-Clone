import { Component } from '@angular/core';
import '@cds/core/icon/register.js';

import { ClarityIcons,angleIcon, usersIcon  } from '@cds/core/icon';

ClarityIcons.addIcons(angleIcon,usersIcon);

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.css']
})

export class SubnavComponent {
  listItems= [
    { name: 'your Teams', content: ['Channel1', 'Channel2'], expanded: false ,routeLink:['teams','teams2']},
    // more items 
  ];

  toggleItem(index: number): void {
    this.listItems[index].expanded = !this.listItems[index].expanded;

    // collapse other items when one is expanded:
    this.listItems.forEach((item, i) => {
      if (i !== index) {
        item.expanded = false;
      }
    });
  }
}