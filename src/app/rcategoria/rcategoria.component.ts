import { Component } from '@angular/core';

@Component({
  selector: 'app-rcategoria',
  templateUrl: './rcategoria.component.html',
  styleUrls: ['./rcategoria.component.css']
})
export class RcategoriaComponent {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Registros.png";
  tipo = "CATEGORIA";
  background = "#F7EFE8"
  nombre = "Ivette"
  rol = "Recepcionista"
}
