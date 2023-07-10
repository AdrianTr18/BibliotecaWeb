import { Component, OnInit } from '@angular/core';
import { AsesoresService } from '../services/asesores/asesores.service';
import { EditorialesService } from '../services/editoriales/editoriales.service';
import { CategoriaService } from '../services/categoria/categoria.service';


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

  //Conastructor para las inyecciones
  constructor(
    private asesoresService: AsesoresService,
    private editorialesService: EditorialesService,
    private categoriasService: CategoriaService
  ) { }

  ngOnInit(): void {

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
