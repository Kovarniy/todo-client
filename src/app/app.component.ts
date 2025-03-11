import {TuiRoot} from '@taiga-ui/core';
import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {AuthService} from '@app/services';
import {HeaderComponent} from './components';
import {zip} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRoot, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private auth = inject(AuthService);
  // TODO продумать отписки (хорошая идея в рамках другой ветки сделать реализацию приложения на сигналах)
  // private destroy = new Subject();

  ngOnInit() {
    zip([this.route.url, this.auth.user$]).subscribe(([url, user]) => {
      if (url[0].path !== '') return;
      if (user) {
        this.router.navigate(['todo', user.id]);
      } else {
        this.router.navigate(['login']);
      }
    });
  }
}
