
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  /**
   * Variable del formulario
   */
  loginForm: FormGroup;

  /**
   * Tipos de documentos
   */
  typeD: Array<string> = [
    "Cédula de Ciudadanía",
    "Carné Diplomático",
    "Certificado de Nacido Vivo",
    "Tarjeta De Identidad",
    "Menor Sin Identificar",
    "Cédula De Extranjería",
    "Pasaporte",
    "Número De Identificación Tributaria",
    "Registro Civil",
    "Salvoconducto",
    "Adulto Sin Identificar",
    "Permiso Especial de Permanencia",
    "Permiso por Protección Temporal",
    "Número Único de Identificación Personal",
    "Documento Extranjero",
  ]

  constructor(private fb: FormBuilder, private _router: Router) {
    this.loginForm = this.fb.group({
      identificacion: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  /**
   * Iniciar sesión
   */
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario válido, datos:', this.loginForm.value);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se ha iniciado sesión",
        showConfirmButton: false,
        timer: 1000
      });
      window.localStorage.setItem('user', JSON.stringify(this.loginForm.value))
      this._router.navigateByUrl("/dashboard");
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error, Verifique los datos ingresados",
        showConfirmButton: false,
        timer: 1000
      });
    }
  }
}
