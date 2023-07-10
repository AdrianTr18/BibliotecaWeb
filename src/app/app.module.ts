import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
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
import { GraficosComponent } from './graficos/graficos.component';
import { CuentasService } from './services/cuentas/cuentas.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
  { path: 'registro-empleados', component: RempleadosComponent},
  { path: 'prueba-graficos', component: GraficosComponent},
  //{ path: '**', component: ErrorComponent},
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
    BodyComponent,
    GraficosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgChartsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [CuentasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
