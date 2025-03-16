import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AuthService} from '@app/services';
import {AsyncPipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {
  public auth = inject(AuthService);
}
