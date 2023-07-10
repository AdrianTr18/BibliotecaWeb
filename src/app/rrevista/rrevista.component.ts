import { Component, OnInit } from '@angular/core';
import { EditorialesService } from '../services/editoriales/editoriales.service';
import { CategoriaService } from '../services/categoria/categoria.service';

@Component({
  selector: 'app-rrevista',
  templateUrl: './rrevista.component.html',
  styleUrls: ['./rrevista.component.css']
})
export class RrevistaComponent implements OnInit {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Registros.png";
  tipo = "REVISTA";
  background = "#F7EFE8";
  nombre = "Ivette"
  rol = "Recepcionista"

  //Variables para los combobox
  editorial: any;
  categoria: any;

  constructor(
    private editorialService: EditorialesService,
    private categoriaService: CategoriaService
    
    ) { }

    ngOnInit(): void {
        this.editorialService.getEditoriales().subscribe(data => {
          this.editorial = data;
        },
        
        error => {
          console.log(error);
        });

        this.categoriaService.getCategorias().subscribe(data => {
          this.categoria = data;
        },

        error => {
          console.log(error);
        });
    }
}
