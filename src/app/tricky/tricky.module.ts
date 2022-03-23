import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TrickyRoutingModule } from './tricky-routing.module';
import { TrickyComponent } from './tricky.component';

@NgModule({
  imports: [CommonModule, TrickyRoutingModule],
  declarations: [TrickyComponent],
})
export class TrickyModule {}
