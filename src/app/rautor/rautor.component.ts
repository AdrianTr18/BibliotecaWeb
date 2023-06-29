import { Component } from '@angular/core';

@Component({
  selector: 'app-rautor',
  templateUrl: './rautor.component.html',
  styleUrls: ['./rautor.component.css']
})
export class RautorComponent {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Registros.png";
  tipo = "AUTOR";
}
