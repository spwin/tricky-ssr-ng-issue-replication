import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectToThemeGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentNavigation = this.router.getCurrentNavigation();
    if (currentNavigation) {
      currentNavigation.extras.skipLocationChange = true;
    }
    // Clear fragments and query params from url and specify them in extras
    const urlTree = this.router.parseUrl(`${state.url}`);
    const urlWithoutParams =
      urlTree.root.children['primary']?.segments
        .map((it) => it.path)
        .join('/') ?? '';

    return this.router.createUrlTree([`/tricky/${urlWithoutParams}`], {
      queryParams: route.queryParams,
      fragment: route.fragment ?? undefined,
    });
  }
}
