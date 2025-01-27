import { Component } from '@angular/core';
//@ts-ignore
import { reports } from '../../../assets/procedimientos'; // Ajusta la ruta según la ubicación de tu archivo
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, PaginationModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  /**
   * Lista en donde vienen los reporte
   */
  lista = reports
  returnedArray?: any[];

  /**
   * Datos de la paginación
   */
  maxSize = 5;
  itemLength = this.lista.length;
  bigCurrentPage = 1;

  /**
   * Variable del filtro
   */
  filterForm: FormGroup;

  /**
   * Variable en la que se dice en que via se van a compartir los resultados seleccionado
   */
  viaChange: number = 1

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      idPaciente: [''],
      nombre: [''],
      fechaInicio: [],
      fechaFin: [new Date()],
      estado: [null]
    });

    this.lista.forEach((item: any) => {
      item.seleccionado = false
    });
    this.returnedArray = this.lista.slice(0, 10);
    console.log(this.lista);
  }

  /**
   * Cambiar pagina
   */
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.lista.slice(startItem, endItem);
  }


  /**
   * Reportes
   */
  reporte(item: any, event: MouseEvent): void {
    event.stopPropagation();
    console.log('Generando reporte para:', item);
  }

  /**
   * Visualización
   */
  visualizar(item: any, event: MouseEvent): void {
    event.stopPropagation();
    console.log('Visualizando:', item);
  }

  /**
   * Enviar filtros
   */
  applyFilters(): void {
    console.log(this.filterForm.value);
    const { idPaciente, nombre, fechaInicio, fechaFin, estado } = this.filterForm.value;

    this.returnedArray = this.lista.filter((item: any) => {
      const matchesId =
        !idPaciente || item.idPaciente.includes(idPaciente);
      const matchesName =
        !nombre || item.nombrePaciente.toLowerCase().includes(nombre.toLowerCase());
      const matchesEstado = !estado || item.estado === estado;

      const matchesFecha =
        (!fechaInicio || new Date(item.fechaCita) >= new Date(fechaInicio)) &&
        (!fechaFin || new Date(item.fechaCita) <= new Date(fechaFin));

      return matchesId && matchesName && matchesEstado && matchesFecha;
    });
    this.itemLength = this.returnedArray?.length;
    console.log(this.returnedArray);

  }

  /**
   * Resetear filtros
   */
  resetFilters(): void {
    this.filterForm.reset();
    this.itemLength = this.lista.length;
    this.returnedArray = [...this.lista];
  }
}
