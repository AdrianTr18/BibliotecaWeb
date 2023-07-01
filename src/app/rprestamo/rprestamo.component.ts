import { Component } from '@angular/core';

@Component({
  selector: 'app-rprestamo',
  templateUrl: './rprestamo.component.html',
  styleUrls: ['./rprestamo.component.css']
})
export class RprestamoComponent {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Prestamo.jpg";
  tipo = "PRESTAMO";
  nombre = "Ivette"
  rol = "Recepcionista"
}
