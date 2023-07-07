import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartItem, ChartTypeRegistry } from 'chart.js';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  @Input() canvaName : string = "";
  @Input() tipoGrafico : keyof ChartTypeRegistry = 'bar';
  @Input() datosGrafico : string[] = [];
  @Input() tituloGrafico : string = "";

  ngOnInit() {
    let miCanvas = document.getElementById(this.canvaName);
    var chart = new Chart(this.canvaName, {
      type: this.tipoGrafico,
      data: {
        labels: ['Tesis', 'Libros', 'Articulos', 'Revistas'],
        datasets: [
          {
            label: 'Cantidad',
            data: [10, 20, 30, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)'
            ],
            borderWidth: 1
          }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Cantidad de artículos bibliográficos prestados por tipo',
            font: {
              family: 'IBM Plex Sans',
              weight: 'bold'
            },
            color: 'rgb(0, 0, 0)',
            padding: {
              top: 30,
              bottom: 30
            }
          }
        }
      }
    });
  }
}
