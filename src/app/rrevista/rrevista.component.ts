import { Component } from '@angular/core';

@Component({
  selector: 'app-rrevista',
  templateUrl: './rrevista.component.html',
  styleUrls: ['./rrevista.component.css']
})
export class RrevistaComponent {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Registros.png";
  tipo = "REVISTA";
  background = "#F7EFE8";
  nombre = "Ivette"
  rol = "Recepcionista"
}
