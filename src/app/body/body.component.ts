import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{
  @Input() nombreBiblioteca: string | undefined;
  @Input() urlImage: string | undefined;
  @Input() tipo: string | undefined;
  @Input() backgroundColor: string | undefined;
  @Input() nombre: string | undefined;
}
