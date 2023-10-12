import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-entrada',
  templateUrl: './card-entrada.component.html',
  styleUrls: ['./card-entrada.component.scss'],
})
export class CardEntradaComponent implements OnInit {
  @Input() entrada: {
    fecha: string;
    fechaTexto: string;
    texto: string;
  } = { fecha: '', fechaTexto: '', texto: '' };

  @Output() eventoGuardar: EventEmitter<{
    fecha: string;
    fechaTexto: string;
    texto: string;
  }> = new EventEmitter<{
    fecha: string;
    fechaTexto: string;
    texto: string;
  }>();

  constructor() {}

  ngOnInit() {}

  guardar() {
    this.eventoGuardar.emit(this.entrada);

    // Comprobar si 'entradas' existe en el localStorage
    const entradasGuardadas: any[] = JSON.parse(localStorage.getItem('entradas') || '[]');
    
    const entradaIndex = entradasGuardadas.findIndex((e: any) => e.fecha === this.entrada.fecha);
  
    if (entradaIndex !== -1) {
      entradasGuardadas[entradaIndex] = this.entrada;
    } else {
      entradasGuardadas.push(this.entrada);
    }
  
    localStorage.setItem('entradas', JSON.stringify(entradasGuardadas));
  }
}



