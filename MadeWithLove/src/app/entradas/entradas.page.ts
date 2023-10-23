import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlliService } from '../alli.service';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage implements OnInit {
  nombreUsuario: string = '';

  entradas: Array<{
    fecha: string,
    fechaTexto: string,
    texto: string
  }> = [];

  constructor(private router: Router, private alliService: AlliService) {
    this.cargarEntradas();
  }

  ngOnInit() {
    console.log("ngOnInit is running");
    this.nombreUsuario = this.alliService.getNombreUsuario();
  }

  cargarEntradas(){
    this.entradas = JSON.parse(localStorage.getItem('entradas') || '[]');
    if(!this.entradas)return;
    this.entradas.sort((item1, item2) => {
      if (item1.fecha < item2.fecha) return 1;
      if (item1.fecha > item2.fecha) return -1;
      return 0;
    });
  }

  irDetalle(entrada: {
    fecha: string,
    fechaTexto: string,
    texto: string
  }) {
    let datosNavegacion: NavigationExtras = {
      state: {
        entrada: entrada
      }
    }
    this.router.navigate(['/entradas-detalle'], datosNavegacion);
  }
}

