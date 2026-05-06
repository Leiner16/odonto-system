import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface OdontologoData {
  id?: number;
  nombre: string;
  cedula: string;
  especialidad: string;
  telefono: string;
  email: string;
  estado: 'Activo' | 'Inactivo';
}

@Component({
  selector: 'app-odontologos-form',
  imports: [FormsModule],
  templateUrl: './odontologos-form.html',
  styleUrl: './odontologos-form.css'
})
export class OdontologosForm implements OnInit {
  @Input() odontologo: any = null;
  @Output() cerrar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<OdontologoData>();

  especialidades: string[] = [
    'General',
    'Ortodoncia',
    'Endodoncia',
    'Periodoncia',
    'Cirugía Oral',
    'Odontopediatría',
    'Prostodoncia',
    'Estética Dental'
  ];

  odontologoData: OdontologoData = {
    nombre: '',
    cedula: '',
    especialidad: 'General',
    telefono: '',
    email: '',
    estado: 'Activo'
  };

  ngOnInit() {
    if (this.odontologo) {
      this.odontologoData = { ...this.odontologo };
    }
  }

  onGuardar() {
    if (this.odontologo) {
      this.guardar.emit({ ...this.odontologoData, id: this.odontologo.id });
    } else {
      this.guardar.emit(this.odontologoData);
    }
  }

  onCerrar() {
    this.cerrar.emit();
  }
}