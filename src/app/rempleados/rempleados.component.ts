import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rempleados',
  templateUrl: './rempleados.component.html',
  styleUrls: ['./rempleados.component.css']
})
export class RempleadosComponent implements OnInit {
  
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Empleados.jpg";
  tipo = "EMPLEADOS";
  background = "#F7EFE8"
  nombre = "Ivette"
  rol = "Recepcionista"
  empleadoform!: FormGroup;

  constructor(
    private fb: FormBuilder

  ) { }

  ngOnInit(): void {
    this.empleadoform = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      dni: ['', Validators.required],
      sueldo: ['', Validators.required],
      horaslaborales: ['', Validators.required]
    });
  }
}
