import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../services/autores/autores.service';
import { EditorialesService } from '../services/editoriales/editoriales.service';
import { CategoriaService } from '../services/categoria/categoria.service';
import { LibrosService } from '../services/libros/libros.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rlibro',
  templateUrl: './rlibro.component.html',
  styleUrls: ['./rlibro.component.css']
})

export class RlibroComponent implements OnInit {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Registros.png";
  tipo = "LIBROS";
  background = "#F7EFE8";
  nombre = "Ivette";
  rol = "Recepcionista";
  autores: any;
  editoriales: any;
  categoria: any;
  crearLibro: any;
  libroform!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private autoresService: AutoresService,
    private editorialesService: EditorialesService,
    private categoriasService: CategoriaService,
    private libroService: LibrosService
  ) { }

  ngOnInit(): void {
    //variables formgruoup
    this.libroform = this.fb.group({
      titulo: ['', [Validators.required]],
      disponibilidad: ['', [Validators.required]],
      disciplina: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
      fechapubli: ['', [Validators.required]],
      npaginas: ['', [Validators.required]],
      nestante: ['', [Validators.required]],
      bibliografia: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      sinopsis: ['', [Validators.required]],
      nedicion: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]],
      autores: ['', [Validators.required]],
      editorial: ['', [Validators.required]],
      categoria: ['', [Validators.required]]
    });

    //Inyección de dependencias
    //Autores
    this.autoresService.getAllAutores().subscribe(data => {
      this.autores = data;
    },
      error => {
        console.error(error);
      });

    //Editoriales
    this.editorialesService.getEditoriales().subscribe(data => {
      this.editoriales = data;
    },
      error => {
        console.error(error);
      });

    //Categorias
    this.categoriasService.getCategorias().subscribe(resp => {
      this.categoria = resp;
    },
      error => {
        console.error(error);
      });

    //Libros

  }

  //Métodos para el libro
  registrarLibro(): void {
    this.libroService.createLibro(this.autores).subscribe(data => {
      this.crearLibro = data;
    },
      error => {
        console.error(error);
      });
  }

}
