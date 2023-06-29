import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-rarticulos',
  templateUrl: './rarticulos.component.html',
  styleUrls: ['./rarticulos.component.css']
})
export class RarticulosComponent {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Registros.png";
  tipo = "ARTICULOS";
}
