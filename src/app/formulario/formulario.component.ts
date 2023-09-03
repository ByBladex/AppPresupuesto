import { GastoService } from './../gastos/gasto.service';
import { IngresoService } from './../ingreso/ingreso.service';
import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso/ingreso';
import { Gasto } from '../gastos/gasto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string="ingresoOperacion";
  descripcionInput:string;
  valorInput:number;

  constructor(private ingresoService:IngresoService, private gastoService: GastoService) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento){
    this.tipo=evento.target.value;
  }

  agregarValor(){
    if(this.tipo === "ingresoOperacion")
      this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    else
      this.gastoService.gastos.push(new Gasto(this.descripcionInput, this.valorInput));
  }

}
