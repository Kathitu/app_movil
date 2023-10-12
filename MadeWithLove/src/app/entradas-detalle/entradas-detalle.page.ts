import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entradas-detalle',
  templateUrl: './entradas-detalle.page.html',
  styleUrls: ['./entradas-detalle.page.scss'],
})
export class EntradasDetallePage implements OnInit {
  entrada: {
    fecha: string;
    fechaTexto: string;
    texto: string;
  } = {
    fecha: '',
    fechaTexto: '',
    texto: '',
  };

  constructor(private router: Router) {
    const extras = this.router.getCurrentNavigation()?.extras.state;
    if (extras && 'entrada' in extras) {
      this.entrada = extras['entrada']; // Acceso usando notación de índice
    }
  }

  ngOnInit() {}
}







