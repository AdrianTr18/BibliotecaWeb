import { Component, OnInit } from '@angular/core';
import { AsesoresService } from '../services/asesores/asesores.service';
import { EditorialesService } from '../services/editoriales/editoriales.service';
import { CategoriaService } from '../services/categoria/categoria.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-rtesis',
  templateUrl: './rtesis.component.html',
  styleUrls: ['./rtesis.component.css']
})
export class RtesisComponent implements OnInit {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Registros.png";
  tipo = "TESIS";
  background = "#F7EFE8";
  nombre = "Ivette";
  rol = "Recepcionista";
  autores: any;
  editorial: any;
  categoria: any;
  tesisform!: FormGroup;

  //Conastructor para las inyecciones
  constructor(
    private fb: FormBuilder,
    private asesoresService: AsesoresService,
    private editorialesService: EditorialesService,
    private categoriasService: CategoriaService
  ) { }

  ngOnInit(): void {

    //Form group
    this.tesisform = this.fb.group({
      titulo: ['', [Validators.required]],
      disponibilidad: ['', [Validators.required]],
      disciplina: ['',[Validators.required]],
      institucion: ['', [Validators.required]],
      fechapubli: ['', [Validators.required]],
      npaginas: ['', [Validators.required]],
      nestante: ['', [Validators.required]],
      bibliografia: ['', [Validators.required]],
      resumen: ['', [Validators.required]],
      palabrasclave: ['', [Validators.required]],
      asesores: ['', [Validators.required]],
      editorial: ['', [Validators.required]],
      categoria: ['', [Validators.required]]
    });

    //Servicios
    this.asesoresService.getAllAsesores().subscribe(data => {
      this.autores = data;
    },
      error => {
        console.log(error);
      });

    this.editorialesService.getEditoriales().subscribe(data => {
      this.editorial = data;
    },
      error => {
        console.log(error);
      });

    this.categoriasService.getCategorias().subscribe(data => {
      this.categoria = data;
    },
    error => {
      console.log(error);
    });
  }
}
