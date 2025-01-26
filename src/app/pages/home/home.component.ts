import { Component } from '@angular/core';
//@ts-ignore
import { reports } from '../../../assets/procedimientos'; // Ajusta la ruta según la ubicación de tu archivo


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  lista = reports
  constructor() {
    console.log(this.lista);

  }
}
