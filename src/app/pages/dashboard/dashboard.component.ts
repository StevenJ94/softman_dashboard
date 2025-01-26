import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private _router: Router) {

  }

  /**
   * Cerrar sesión
   */
  close() {
    Swal.fire({
      title: "¿Está seguro de querer cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1fbbec",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, cerrar mi sesión",
      cancelButtonText: "No, permanecer en el sitio",
    }).then((result) => {
      if (result.isConfirmed) {
        this._router.navigateByUrl("/login")
        Swal.fire({
          title: "Se ha cerrado sesión",
          icon: "success"
        });
      }
    });
  }
}
