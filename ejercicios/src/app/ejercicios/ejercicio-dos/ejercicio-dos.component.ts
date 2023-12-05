import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-dos',
  templateUrl: './ejercicio-dos.component.html',
  styleUrls: ['./ejercicio-dos.component.css']
})
export class EjercicioDosComponent {

  alimento:string = ""
  alimentos:string[] = []
  limpiar:boolean = false
  agregarAlimento(): void{
    this.limpiar = false
    this.alimentos.push(this.alimento)
    this.alimento = ""
  }

  limpiarLista(): void{
    this.alimentos = []
    this.limpiar = true
  }

}
