import { IngresoService } from './ingreso.service';
import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos:Ingreso[]=[];

  constructor(private ingresoService: IngresoService){

  }

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarIngreso(ingreso:Ingreso){
    this.ingresoService.eliminarRegistro(ingreso);
    console.log("Eliminado registro "+ingreso.descripcion);
  }
}