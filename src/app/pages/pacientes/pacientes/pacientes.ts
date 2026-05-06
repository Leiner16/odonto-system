import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteForm } from '../paciente-form/paciente-form';

interface Paciente {
  id: number;
  nombre: string;
  cedula: string;
  telefono: string;
  email: string;
  estado: 'Activo' | 'Inactivo';
}

@Component({
  selector: 'app-pacientes',
  imports: [CommonModule, PacienteForm],
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.css',
})
export class Pacientes {
  mostrarFormulario = false;

  pacientes: Paciente[] = [
    { id: 1, nombre: 'Ana Martínez', cedula: '1234567890', telefono: '3001234567', email: 'ana@gmail.com', estado: 'Activo' },
    { id: 2, nombre: 'Carlos Ruiz', cedula: '0987654321', telefono: '3109876543', email: 'carlos@gmail.com', estado: 'Activo' },
    { id: 3, nombre: 'María López', cedula: '1122334455', telefono: '3201122334', email: 'maria@gmail.com', estado: 'Inactivo' },
    { id: 4, nombre: 'Pedro Gómez', cedula: '5544332211', telefono: '3005544332', email: 'pedro@gmail.com', estado: 'Activo' },
  ];

  onGuardar(paciente: any) {
    if (this.pacienteSeleccionado) {
      // Editar existente
      this.pacientes = this.pacientes.map(p =>
        p.id === this.pacienteSeleccionado.id ? { ...p, ...paciente } : p
      );
      this.pacienteSeleccionado = null;
    } else {
      // Crear nuevo
      this.pacientes.push({ id: this.pacientes.length + 1, ...paciente });
   }
    this.mostrarFormulario = false;
  }

  onEliminar(id: number) {
  this.pacientes = this.pacientes.filter(p => p.id !== id);
  }
  
  pacienteSeleccionado: any = null;

  onEditar(paciente: any) {
  this.pacienteSeleccionado = { ...paciente };
  this.mostrarFormulario = true;
}

}
