import { Component } from '@angular/core';
//@ts-ignore
import { reports } from '../../../assets/procedimientos'; // Ajusta la ruta según la ubicación de tu archivo
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  /**
   * Lista en donde vienen los reporte
   */


  lista = reports


  constructor() {
    this.lista.forEach((item: any) => {
      item.seleccionado = false
    });
    console.log(this.lista);
  }



  reporte(item: any, event: MouseEvent): void {
    event.stopPropagation();
    console.log('Generando reporte para:', item);
  }

  visualizar(item: any, event: MouseEvent): void {
    event.stopPropagation();
    console.log('Visualizando:', item);
  }
}
