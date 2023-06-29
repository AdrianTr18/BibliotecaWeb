import { Component } from '@angular/core';

@Component({
  selector: 'app-reditorial',
  templateUrl: './reditorial.component.html',
  styleUrls: ['./reditorial.component.css']
})
export class ReditorialComponent {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Registros.png";
  tipo = "EDITORIAL";
}
