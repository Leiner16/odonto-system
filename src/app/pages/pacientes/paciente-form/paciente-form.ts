import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface PacienteData {
  nombre: string;
  cedula: string;
  telefono: string;
  email: string;
  estado: 'Activo' | 'Inactivo';
} 

@Component({
  selector: 'app-paciente-form',
  imports: [FormsModule],
  templateUrl: './paciente-form.html',
  styleUrl: './paciente-form.css'
})
export class PacienteForm {
  @Output() cerrar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<PacienteData>();

  paciente: PacienteData = {
    nombre: '',
    cedula: '',
    telefono: '',
    email: '',
    estado: 'Activo'
  };

  onGuardar() {
    this.guardar.emit(this.paciente);
  }

  onCerrar() {
    this.cerrar.emit();
  }
}