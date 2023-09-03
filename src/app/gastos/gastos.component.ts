import { GastoService } from './gasto.service';
import { Component, Input, OnInit } from '@angular/core';
import { Gasto } from './gasto';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  gastos:Gasto[]=[];
  @Input() ingresoTotal:number;

  constructor(private gastoService: GastoService) { }

  ngOnInit(): void {
    this.gastos = this.gastoService.gastos;
  }

  eliminarGasto(gasto:Gasto){
    this.gastoService.eliminarRegistro(gasto);
    console.log("Eliminado registro "+gasto.descripcion);
  }

  calcularPorcentaje(gasto:Gasto){
    return gasto.valor/this.ingresoTotal;
  }
}