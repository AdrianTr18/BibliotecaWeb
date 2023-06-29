import { Component } from '@angular/core';

@Component({
  selector: 'app-rmulta',
  templateUrl: './rmulta.component.html',
  styleUrls: ['./rmulta.component.css']
})
export class RmultaComponent {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Multa.jpg";
  tipo = "MULTA";
}
