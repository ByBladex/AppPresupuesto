import { GastoService } from './gastos/gasto.service';
import { IngresoService } from './ingreso/ingreso.service';
import { Component } from '@angular/core';
import { Gasto } from './gastos/gasto';
import { Ingreso } from './ingreso/ingreso';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ingresos:Ingreso[]=[];
  gastos:Gasto[]=[];

  constructor(private ingresoService: IngresoService, private gastoService: GastoService){
    this.ingresos = this.ingresoService.ingresos;
    this.gastos = this.gastoService.gastos;
  }

  getIngresoTotal(){
    let ingresoTotal: number=0;

    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getGastoTotal(){
    let gastoTotal: number=0;

    this.gastos.forEach(gasto => {
      gastoTotal += gasto.valor;
    });
    return gastoTotal;
  }

  getPorcentajeTotal(){
    return this.getGastoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal()-this.getGastoTotal();
  }
}