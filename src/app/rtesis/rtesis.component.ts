import { Component } from '@angular/core';

@Component({
  selector: 'app-rtesis',
  templateUrl: './rtesis.component.html',
  styleUrls: ['./rtesis.component.css']
})
export class RtesisComponent {
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  urlImg = "/assets/Fondo_Registros.png";
  tipo = "TESIS";
  background = "#F7EFE8";
  nombre = "Ivette";
  rol = "Recepcionista";
}
