import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import {AuthService} from '@app/services';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[hasRole]',
  standalone: true,
})
export class HasRoleDirective implements OnInit, OnDestroy {
  @Input() hasRole!: string[];
  subscription!: Subscription;

  constructor(
    private authService: AuthService,
    private template: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {}

  ngOnInit(): void {
    this.subscription = this.authService?.user$.subscribe((user) => {
      if (!user) return;
      this.checkRoles(user?.roles as string[]);
    });
  }

  checkRoles(userRole: string[]) {
    if (!userRole?.length) return;
    if (this.hasRole.some((acessRole) => userRole.includes(acessRole))) {
      this.viewContainerRef.createEmbeddedView(this.template);
    } else {
      this.viewContainerRef.clear();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
