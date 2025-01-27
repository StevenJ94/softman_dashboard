import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AbstractControl, FormsModule } from '@angular/forms'; // Importa FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  datosUser: any;

  /**
  * Variable del filtro
  */
  filterForm: FormGroup

  /**
   * Correo
   */
  correo: string = ''

  constructor(private fb: FormBuilder, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const param: any = window.localStorage.getItem('user')
      this.datosUser = JSON.parse(param)
    }

    this.filterForm = this.fb.group({
      contraseñaActual: [''],
      contraseñaNueva: [''],
      contraseñaNuevaRepetida: []
    },
      { validators: this.passwordMatchValidator } // Asigna el validador al grupo);
    )
  }

  /**Validador personalizado para comprobar si las contraseñas coinciden */
  passwordMatchValidator(group: AbstractControl): { [key: string]: boolean } | null {
    const password = group.get('contraseñaNueva')?.value;
    const confirmPassword = group.get('contraseñaNuevaRepetida')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  /**Método para verificar errores en un control */
  getControlError(controlName: string, errorName: string): boolean {
    const control = this.filterForm?.get(controlName);
    //@ts-ignore
    return control.hasError(errorName) && control.touched;
  }

  /**Método para manejar el envío del formulario */
  onSubmit(): void {
    if (this.filterForm.valid) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se ha cambiado la contraseña",
        showConfirmButton: false,
        timer: 1000
      });
    } else {
      alert('Por favor revisa los errores en el formulario');
      this.filterForm.markAllAsTouched(); // Marca todos los controles como tocados para mostrar errores
    }
  }

  /**
   * Cambiar correo
   */
  changeEmail() {
    if (this.correo && this.correo.length > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "El correo ha sido modificado",
        showConfirmButton: false,
        timer: 1000
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error, Verifique que el correo sea correcto o no esté el campo vacío",
        showConfirmButton: false,
        timer: 1000
      });
    }
  }
}
