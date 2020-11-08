import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { OutroComponent } from './service/outro/outro.component';
import { EventBindingComponent } from './event-binding/event-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    OutroComponent,
    EventBindingComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
