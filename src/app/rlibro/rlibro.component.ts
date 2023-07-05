import { Component } from '@angular/core';

@Component({
  selector: 'app-rlibro',
  templateUrl: './rlibro.component.html',
  styleUrls: ['./rlibro.component.css']
})
export class RlibroComponent {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Registros.png";
  tipo = "LIBROS";
  background = "#F7EFE8";
  nombre = "Ivette";
  rol = "Recepcionista";
}
