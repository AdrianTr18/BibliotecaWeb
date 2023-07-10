import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rautor',
  templateUrl: './rautor.component.html',
  styleUrls: ['./rautor.component.css']
})
export class RautorComponent implements OnInit {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Registros.png";
  tipo = "AUTOR";
  background = "#F7EFE8"
  nombre = "Ivette"
  rol = "Recepcionista"
  autorform!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.autorform = this.fb.group({
          nombre: ['', Validators.required],
          apellido: ['', Validators.required],
          telefono: ['', Validators.required],
          dni: ['', Validators.required],
          nacionalidad: ['', Validators.required]
        });
  }

}