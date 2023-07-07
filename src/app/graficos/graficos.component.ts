import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  // @Input() canvaName: String | undefined;
  // @Input() tipoGrafico: String | undefined;

  ngOnInit() {
    let miCanvas = document.getElementById('Grafica_1');
    var chart = new Chart('Grafica_1', {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
          {
            label: 'Prueba',
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
          }]
      }
    });
  }
}
