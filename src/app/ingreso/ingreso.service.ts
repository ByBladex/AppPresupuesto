import { Ingreso } from './ingreso';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  ingresos:Ingreso[]=[
    new Ingreso("Salario",4000),
    new Ingreso("Venta de coche",2500)
  ];

  constructor() { }
  
  eliminarRegistro(ingreso:Ingreso){
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice,1);
  }
}