import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactivityComponent } from './reactivity/reactivity.component';
import { ApiCallsComponent } from './api-calls/api-calls.component';
import { DependencyComponent } from './dependency/dependency.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactivityComponent,
    ApiCallsComponent,
    DependencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
