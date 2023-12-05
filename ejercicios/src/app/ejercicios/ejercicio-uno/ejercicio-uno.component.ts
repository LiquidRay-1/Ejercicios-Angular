import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-uno',
  templateUrl: './ejercicio-uno.component.html',
  styleUrls: ['./ejercicio-uno.component.css']
})
export class EjercicioUnoComponent {
  num1: string = ""
  num2: string=""
  resultado:number = 0
  sumar(): void{

   let numeroUno =  Number.parseInt(this.num1)
   let numeroDos =  Number.parseInt(this.num2)

   let suma = numeroUno + numeroDos
   this.resultado = suma
  }
}
