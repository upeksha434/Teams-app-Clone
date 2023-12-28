import { Component } from '@angular/core';
import '@cds/core/icon/register.js';
import '@cds/core/button/register.js';
import { ClarityIcons, userIcon,searchIcon,circleIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon,searchIcon,circleIcon);
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
