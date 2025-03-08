import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiButton} from '@taiga-ui/core';
import {TuiHeaderComponent} from "@taiga-ui/layout";
import {TuiThemeColorService} from '@taiga-ui/cdk';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TuiHeaderComponent,
    TuiButton,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly theme = inject(TuiThemeColorService);
  public url = {
    signup: '/signup',
    login: '/login',
  };

  constructor() {
    this.theme.color = 'purple';
  }
}
