import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartTypeRegistry } from 'chart.js';
import { SubcategoriaLCService } from '../services/subcategoriaLC/subcategoria-lc.service';
import { CategoriaService } from '../services/categoria/categoria.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

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
  @Input() crearRevista: any | undefined;
  @Input() revistaform!: FormGroup;
  @Input() crearTesis: any | undefined;
  @Input() tesisform!: FormGroup;
  @Input() registrarEmpleado: any | undefined;
  @Input() empleadoform!: FormGroup;
  @Input() registrarEditorial: any | undefined;
  @Input() editorialform!: FormGroup;
  @Input() registrarAutor: any | undefined;
  @Input() autorform!: FormGroup;
  @Input() categoriaform!: FormGroup;
  @Input() subcategoriaLC: any | undefined;
  @Input() registrarLibro: any | undefined;
  @Input() libroform!: FormGroup;
  @Input() registrarMulta: any | undefined;
  @Input() multaform!: FormGroup;



  //Variables para el grafico
  tipoGrafico: keyof ChartTypeRegistry = 'bar';
  labelsGrafico: string[] = [];
  tituloGrafico: string = "";
  leyendaGrafico: string = "";
  colorsGrafico: string[] = [];
  borderColorGrafico: string[] = [];
  valuesGrafico: number[] = [];

  //Constructor para los servicios
  constructor(
    private categoriaService: CategoriaService,
    private subcategoriaService: SubcategoriaLCService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    
    //categoria
    this.categoriaform = this.fb.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      subCategoriaLC: ['', Validators.required]
    });
    //editorial
    this.editorialform;
    
    //empleado
    this.empleadoform;
    
    //revista
    this.revistaform;
    
    //tesis
    this.tesisform = this.fb.group({
      titulo: ['', Validators.required],
      disponibilidad: ['', Validators.required],
      disciplina: ['', Validators.required],
      institucion: ['', Validators.required],
      fechapubli: ['', Validators.required],
      npaginas: ['', Validators.required],
      nestante: ['', Validators.required],
      bibliografia: ['', Validators.required],
      resumen: ['', Validators.required],
      palabrasclave: ['', Validators.required],
      asesores: ['', Validators.required],
      editorial: ['', Validators.required],
      categoria: ['', Validators.required]
    });
    //Funciones
    this.subcategoriaService.getSubcategoria().subscribe(data => {
      return this.subcategoriaLC = data;
    });
  }
  
  //Funciones para el CRUD
  registrarCategoria(): void {
    this.categoriaService.addCategoria(this.categoriaform.value).subscribe(resp => {
      this.categoriaform.reset();
    }, err => {
      console.log(err);
    });
  }

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
