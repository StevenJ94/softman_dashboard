import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

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

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      identificacion: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario válido, datos:', this.loginForm.value);
      alert('Inicio de sesión exitoso');
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
