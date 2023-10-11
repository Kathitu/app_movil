import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage implements OnInit {

  entradas: Array<{
    fecha: string,
    fechaTexto: string,
    texto: string
  }> = [];

  constructor(private navCtrl: NavController) {
    this.cargarEntradas();
  }

  ngOnInit() {
  }

  cargarEntradas(){
    this.entradas = JSON.parse(localStorage.getItem('entradas') || '[]');
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
    this.navCtrl.navigateForward('/detalle/' + entrada.fecha);
  }
}

