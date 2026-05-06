import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OdontologosForm } from '../odontologo-form/odontologos-form';

interface Odontologo {
  id: number;
  nombre: string;
  cedula: string;
  especialidad: string;
  telefono: string;
  email: string;
  estado: 'Activo' | 'Inactivo';
}

@Component({
  selector: 'app-odontologos',
  imports: [CommonModule, OdontologosForm],
  templateUrl: './odontologo.html',
  styleUrl: './odontologo.css',
})
export class Odontologos {
  mostrarFormulario = false;
  odontologoSeleccionado: any = null;

  odontologos: Odontologo[] = [
    { id: 1, nombre: 'Dr. Carlos Méndez', cedula: '1098765432', especialidad: 'Ortodoncia', telefono: '3012345678', email: 'carlos.mendez@gmail.com', estado: 'Activo' },
    { id: 2, nombre: 'Dra. Laura Vega', cedula: '9876543210', especialidad: 'Endodoncia', telefono: '3023456789', email: 'laura.vega@gmail.com', estado: 'Activo' },
    { id: 3, nombre: 'Dr. Andrés Soto', cedula: '1234567890', especialidad: 'Cirugía Oral', telefono: '3034567890', email: 'andres.soto@gmail.com', estado: 'Inactivo' },
    { id: 4, nombre: 'Dra. Patricia Luna', cedula: '5678901234', especialidad: 'Odontopediatría', telefono: '3045678901', email: 'patricia.luna@gmail.com', estado: 'Activo' },
  ];

  onGuardar(odontologo: any) {
    if (this.odontologoSeleccionado) {
      this.odontologos = this.odontologos.map(o =>
        o.id === this.odontologoSeleccionado.id ? { ...o, ...odontologo } : o
      );
      this.odontologoSeleccionado = null;
    } else {
      this.odontologos.push({ id: this.odontologos.length + 1, ...odontologo });
    }
    this.mostrarFormulario = false;
  }

  onEliminar(id: number) {
    this.odontologos = this.odontologos.filter(o => o.id !== id);
  }

  onEditar(odontologo: any) {
    this.odontologoSeleccionado = { ...odontologo };
    this.mostrarFormulario = true;
  }
}