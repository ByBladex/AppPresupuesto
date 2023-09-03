import { Gasto } from './gasto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  gastos:Gasto[]=[
    new Gasto("Alquiler",450),
    new Gasto("Restaurante",54),
    new Gasto("Ropa",150)
  ];

  constructor() { }
  
  eliminarRegistro(ingreso:Gasto){
    const indice: number = this.gastos.indexOf(ingreso);
    this.gastos.splice(indice,1);
  }
}
