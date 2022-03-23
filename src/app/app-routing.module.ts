import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectToThemeGuard } from './redirect-to-theme-guard.service';

const routes: Routes = [
  {
    path: 'test',
    canActivate: [RedirectToThemeGuard],
    loadChildren: () =>
      import('app/test/test.module').then((m) => m.TestModule),
  },
  {
    path: 'tricky',
    loadChildren: () =>
      import('app/tricky/tricky.module').then((m) => m.TrickyModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
