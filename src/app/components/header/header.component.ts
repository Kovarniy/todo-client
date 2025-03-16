import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiButton} from '@taiga-ui/core';
import {TuiHeaderComponent} from '@taiga-ui/layout';
import {TuiThemeColorService} from '@taiga-ui/cdk';
import {AuthService} from '@app/services';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TuiHeaderComponent, TuiButton, RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly theme = inject(TuiThemeColorService);
  public url = {
    signup: '/signup',
    login: '/login',
  };

  constructor(public auth: AuthService) {
    this.theme.color = 'purple';
  }

  logout() {
    this.auth.logout();
  }
}
