import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { TestRoutingModule } from './test/test-routing.module';
import { TestModule } from './test/test.module';
import { TrickyModule } from './tricky/tricky.module';

@NgModule({
  imports: [
    AppModule,
    TestModule,
    TrickyModule,
    ServerModule,
    AppRoutingModule,
    TestRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
