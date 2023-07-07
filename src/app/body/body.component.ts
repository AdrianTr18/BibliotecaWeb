import { Component, Input } from '@angular/core';
import { ChartTypeRegistry } from 'chart.js';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{
  @Input() nombreBiblioteca: string | undefined;
  @Input() urlImage: string | undefined;
  @Input() tipo: string | undefined;
  @Input() backgroundColor: string | undefined;
  @Input() nombre: string | undefined;

  //Variables para el grafico
  tipoGrafico : keyof ChartTypeRegistry = 'bar';
  
  setTipo(tipo: keyof ChartTypeRegistry ){
    this.tipoGrafico = tipo;
    return this.tipoGrafico;
  }

}
