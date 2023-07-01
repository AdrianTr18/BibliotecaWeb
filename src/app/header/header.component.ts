import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() nombreBiblioteca: string | undefined
  @Input() nombre: string | undefined
  @Input() rol: string | undefined
}
