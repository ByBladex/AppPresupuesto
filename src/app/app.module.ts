import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { GastosComponent } from './gastos/gastos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    FormularioComponent,
    IngresoComponent,
    GastosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
