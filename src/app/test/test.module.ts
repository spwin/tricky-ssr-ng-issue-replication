import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';

@NgModule({
  imports: [CommonModule, TestRoutingModule],
  declarations: [TestComponent],
})
export class TestModule {}
