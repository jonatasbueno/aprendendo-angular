import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { OutroComponent } from './service/outro/outro.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { NomeCursoComponent } from './input-property/nome-curso/nome-curso.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { ContadorComponent } from './output-property/contador/contador.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    OutroComponent,
    EventBindingComponent,
    ClassStyleBindingComponent,
    InputPropertyComponent,
    NomeCursoComponent,
    OutputPropertyComponent,
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
