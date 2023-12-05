import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioUnoComponent } from './ejercicios/ejercicio-uno/ejercicio-uno.component';
import { EjercicioDosComponent } from './ejercicios/ejercicio-dos/ejercicio-dos.component';
import { EjercicioTresComponent } from './ejercicios/ejercicio-tres/ejercicio-tres.component';

const routes: Routes = [
  {path: 'uno', component: EjercicioUnoComponent},
  {path: "dos", component: EjercicioDosComponent},
  {path: 'tres', component: EjercicioTresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
