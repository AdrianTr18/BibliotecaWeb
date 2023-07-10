import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubcategoriaLCService } from '../services/subcategoriaLC/subcategoria-lc.service';
import { CategoriaService } from '../services/categoria/categoria.service';

@Component({
  selector: 'app-rcategoria',
  templateUrl: './rcategoria.component.html',
  styleUrls: ['./rcategoria.component.css']
})
export class RcategoriaComponent implements OnInit {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Registros.png";
  tipo = "CATEGORIA";
  background = "#F7EFE8"
  nombre = "Ivette"
  rol = "Recepcionista"
  

  constructor(
    private categoriaService: CategoriaService,
    private subcategoriaService: SubcategoriaLCService
    ) { }

    ngOnInit(): void {
        
    }

    // registrarCategoria(): void{
    //   this.categoriaService.addCategoria(this.categoriaform.value).subscribe( values => {
    //   },
    //   error => {
    //     console.log(error);
    //   });
    // }

}
