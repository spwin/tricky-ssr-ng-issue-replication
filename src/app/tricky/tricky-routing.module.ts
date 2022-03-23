import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { testViewRouteMatcher } from 'app/test-view-route-matcher';
import { TrickyComponent } from './tricky.component';

const routes: Routes = [
  {
    matcher: testViewRouteMatcher,
    component: TrickyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrickyRoutingModule {}
