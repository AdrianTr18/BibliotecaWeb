import { Component, OnInit } from '@angular/core';
import { EditorialesService } from '../services/editoriales/editoriales.service';
import { CategoriaService } from '../services/categoria/categoria.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  revistaform!: FormGroup;

  //Variables para los combobox
  editorial: any;
  categoria: any;

  constructor(
    private fb: FormBuilder,
    private editorialService: EditorialesService,
    private categoriaService: CategoriaService
    ) { }

    ngOnInit(): void {
      //Form Group
      this.revistaform = this.fb.group({
        titulo: ['', [Validators.required]],
        disponibilidad: ['', [Validators.required]],
        disciplina: ['',[Validators.required]],
        isbn: ['', [Validators.required]],
        fechapubli: ['', [Validators.required]],
        npaginas: ['', [Validators.required]],
        nestante: ['', [Validators.required]],
        bibliografia: ['', [Validators.required]],
        volumen: ['', [Validators.required]],
        miembroscomite: ['', [Validators.required]],
        indicador: ['', [Validators.required]],
        palabrasclave: ['', [Validators.required]],
        editorial: ['', [Validators.required]],
        categoria: ['', [Validators.required]]
      });
      //Servicios
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
