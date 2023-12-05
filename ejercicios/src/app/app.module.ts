import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjercicioUnoComponent } from './ejercicios/ejercicio-uno/ejercicio-uno.component';
import { FormsModule } from '@angular/forms';
import { EjercicioDosComponent } from './ejercicios/ejercicio-dos/ejercicio-dos.component';
import { EjercicioTresComponent } from './ejercicios/ejercicio-tres/ejercicio-tres.component';

@NgModule({
  declarations: [
    AppComponent,
    EjercicioUnoComponent,
    EjercicioDosComponent,
    EjercicioTresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
