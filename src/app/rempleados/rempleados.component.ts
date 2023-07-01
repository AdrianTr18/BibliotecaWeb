import { Component } from '@angular/core';

@Component({
  selector: 'app-rempleados',
  templateUrl: './rempleados.component.html',
  styleUrls: ['./rempleados.component.css']
})
export class RempleadosComponent {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Empleados.jpg";
  tipo = "EMPLEADOS";
  background = "#F7EFE8"
  nombre = "Ivette"
  rol = "Recepcionista"
}
