import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CuentasService } from '../services/cuentas/cuentas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //variables de la clase
  title = 'Biblioteca Web';
  nombreBiblioteca = "Biblioteca Nacional del Perú";
  loginform!: FormGroup;

  //Constructor y OnInit

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cuentasService: CuentasService
  ) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  Ingresar() {

  }


  irAInicio() {
    this.router.navigate(['/inicio']);
  }
}
