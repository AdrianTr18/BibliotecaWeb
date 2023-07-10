import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChartTypeRegistry } from 'chart.js';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {



  //Constructor para los servicios
  constructor( 
    ){}

    ngOnInit(): void {

    }

  // Variables para darle forma al cuerpo
  @Input() nombreBiblioteca: string | undefined;
  @Input() urlImage: string | undefined;
  @Input() tipo: string | undefined;
  @Input() backgroundColor: string | undefined;
  @Input() nombre: string | undefined;
  @Input() rol: string | undefined;
  @Input() autores: any | undefined;
  @Input() editoriales: any | undefined;
  @Input() categorias: any | undefined;


  //Variables para el grafico
  tipoGrafico: keyof ChartTypeRegistry = 'bar';
  labelsGrafico: string[] = [];
  tituloGrafico: string = "";
  leyendaGrafico: string = "";
  colorsGrafico: string[] = [];
  borderColorGrafico: string[] = [];
  valuesGrafico: number[] = [];

  // Funciones para el grafico
  setTipo(tipo: keyof ChartTypeRegistry) {
    this.tipoGrafico = tipo;
    return this.tipoGrafico;
  }

  setLabels(labels: string[]) {
    this.labelsGrafico = labels;
    return this.labelsGrafico;
  }

  setTitulo(titulo: string) {
    this.tituloGrafico = titulo;
    return this.tituloGrafico;
  }

  setLeyenda(leyenda: string) {
    this.leyendaGrafico = leyenda;
    return this.leyendaGrafico;
  }

  setColors(colors: string[]) {
    this.colorsGrafico = colors;
    return this.colorsGrafico;
  }

  setBorderColor(borderColor: string[]) {
    this.borderColorGrafico = borderColor;
    return this.borderColorGrafico;
  }

  setValues(values: number[]) {
    this.valuesGrafico = values;
    return this.valuesGrafico;
  }
}
