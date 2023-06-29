import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Biblioteca Web';
  nombreBiblioteca = "Biblioteca Nacional del Perú";

  constructor(private router: Router){}
  
  irAInicio(){
    this.router.navigate(['/inicio']);
  }
}
