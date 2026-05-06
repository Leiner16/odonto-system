import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface PacienteData {
  id?: number
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
export class PacienteForm implements OnInit{
  @Input() paciente: any = null;
  @Output() cerrar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<PacienteData>();

  pacienteData: PacienteData = {
    nombre: '',
    cedula: '',
    telefono: '',
    email: '',
    estado: 'Activo'
  };

  ngOnInit(){
    if(this.paciente){
      this.pacienteData = {...this.paciente};
    }
  }

  onGuardar() {
  if (this.paciente) {
    this.guardar.emit({ ...this.pacienteData, id: this.paciente.id });
  } else {
    this.guardar.emit(this.pacienteData);
  }
  }

  onCerrar() {
    this.cerrar.emit();
  }
}