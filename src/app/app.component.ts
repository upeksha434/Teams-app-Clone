import { Component } from '@angular/core';
import '@cds/core/icon/register.js';
import '@cds/core/button/register.js';
import { ClarityIcons, userIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assignment';
}
