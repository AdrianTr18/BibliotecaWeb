import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RlibroComponent } from './rlibro/rlibro.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { RtesisComponent } from './rtesis/rtesis.component';
import { RarticulosComponent } from './rarticulos/rarticulos.component';
import { RrevistaComponent } from './rrevista/rrevista.component';
import { RautorComponent } from './rautor/rautor.component';
import { RcategoriaComponent } from './rcategoria/rcategoria.component';
import { ReditorialComponent } from './reditorial/reditorial.component';
import { RmultaComponent } from './rmulta/rmulta.component';
import { RprestamoComponent } from './rprestamo/rprestamo.component';
import { RempleadosComponent } from './rempleados/rempleados.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

const appRoutes: Routes=[
  { path: '', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'registro-libros', component: RlibroComponent},
  { path: 'registro-tesis', component: RtesisComponent},
  { path: 'registro-articulos', component: RarticulosComponent},
  { path: 'registro-revista', component: RrevistaComponent},
  { path: 'registro-autor', component: RautorComponent},
  { path: 'registro-categoria', component: RcategoriaComponent},
  { path: 'registro-editorial', component: ReditorialComponent},
  { path: 'registro-multa', component: RmultaComponent},
  { path: 'registro-prestamo', component: RprestamoComponent},
  { path: 'registro-empleados', component: RempleadosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RlibroComponent,
    InicioComponent,
    FooterComponent,
    RtesisComponent,
    RarticulosComponent,
    RrevistaComponent,
    RautorComponent,
    RcategoriaComponent,
    ReditorialComponent,
    RmultaComponent,
    RprestamoComponent,
    RempleadosComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
