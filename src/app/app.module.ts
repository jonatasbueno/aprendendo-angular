import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { OutroComponent } from './service/outro/outro.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    OutroComponent,
    EventBindingComponent,
    ClassStyleBindingComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
