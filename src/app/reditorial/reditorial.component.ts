import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reditorial',
  templateUrl: './reditorial.component.html',
  styleUrls: ['./reditorial.component.css']
})
export class ReditorialComponent implements OnInit {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Registros.png";
  tipo = "EDITORIAL";
  background = "#F7EFE8"
  nombre = "Ivette"
  rol = "Recepcionista"
  editorialform!: FormGroup;

  constructor(
    private fb: FormBuilder
    ) {}
    
    ngOnInit(): void {
        this.editorialform = this.fb.group({
          nombre: [[''], [Validators.required]],
          titulo: [[''], [Validators.required]],
          direccion: [[''], [Validators.required]]
        });
    }
}
