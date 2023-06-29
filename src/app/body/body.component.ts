import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input() nombreBiblioteca: string | undefined;
  @Input() urlImage: string | undefined;
  @Input() tipo: string | undefined;
}
