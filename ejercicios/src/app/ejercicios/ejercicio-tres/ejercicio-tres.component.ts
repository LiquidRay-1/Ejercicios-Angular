import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-tres',
  templateUrl: './ejercicio-tres.component.html',
  styleUrls: ['./ejercicio-tres.component.css']
})
export class EjercicioTresComponent {
  texto:string = ''
  color:string = 'black'

  verde:boolean = false
  azul:boolean = false
  rojo:boolean = false

  setVerde(): void{
    this.color = 'green'
  }

  setAzul(): void{
    this.color = 'blue'
  }

  setRojo(): void{
    this.color = 'red'
  }

}
