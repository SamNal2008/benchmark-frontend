import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactivityComponent } from './reactivity/reactivity.component';
import { ApiCallsComponent } from './api-calls/api-calls.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactivityComponent,
    ApiCallsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
