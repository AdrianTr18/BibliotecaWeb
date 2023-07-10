import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubcategoriaLCService } from '../services/subcategoriaLC/subcategoria-lc.service';

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
  categoriaform!: FormGroup;
  subcategoria: any;

  constructor(
    private fb: FormBuilder,
    private subcategoriaService: SubcategoriaLCService
    ) { }

    ngOnInit(): void {
        this.categoriaform = this.fb.group({
          codigo: [[''],[Validators.required]],
          descripcion: [[''],[Validators.required]],
          telefono: [[''],[Validators.required]],
          dni: [[''],[Validators.required]],
          nacionalidad: [[''],[Validators.required]]
        });

        //Inyeccion de servicios
        this.subcategoriaService.getSubcategoriaLCs().subscribe( data => {
          return this.subcategoria = data;
        },
        error => {
          console.log(error);
        });
    }

    registrarCategoria(): void{
      this.subcategoriaService.addSubcategoriaLC(this.categoriaform.value).subscribe( data => {
      },
      error => {
        console.log(error);
      });
    }

}
