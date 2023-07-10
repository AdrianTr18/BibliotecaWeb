import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../services/autores/autores.service';
import { EditorialesService } from '../services/editoriales/editoriales.service';
import { CategoriaService } from '../services/categoria/categoria.service';

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

  constructor(
    private autoresService: AutoresService,
    private editorialesService: EditorialesService,
    private categoriasService: CategoriaService
    ) { }

  ngOnInit(): void {
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
  }
}
