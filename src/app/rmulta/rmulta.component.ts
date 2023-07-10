import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rmulta',
  templateUrl: './rmulta.component.html',
  styleUrls: ['./rmulta.component.css']
})
export class RmultaComponent implements OnInit {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Multa.jpg";
  tipo = "MULTA";
  background = "#F7EFE8";
  nombre = "Ivette"
  rol = "Recepcionista"
  multaform!: FormGroup;

  constructor(
    private fb: FormBuilder
    
    ) { }

    ngOnInit(): void {
        this.multaform = this.fb.group({
          nombre: [[''], [Validators.required]],
          apellidos: [[''], [Validators.required]],
          telefono: [[''],[Validators.required]],
          dni: [[''], [Validators.required]],
          motivo: [[''], [Validators.required]],
          nmulta: [[''], [Validators.required]]
        });
    }
}
