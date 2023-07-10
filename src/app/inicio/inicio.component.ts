import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent{
  
  nombreBiblioteca="Biblioteca Nacional del Perú";
  imgUrl = "";
  backgroundColor = "#FFFFFF";
  nombre = "Ivette";
  rol: string = "";
  tipo = "Inicio";

  //Funciones para config
  setRol(rol: string){
    this.rol = rol;
    return this.rol;
  }
}
