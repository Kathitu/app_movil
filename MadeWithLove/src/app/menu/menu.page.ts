import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado: number = 0;

  paginas = [
    {
      titulo:'Home',
      url: '/menu/home2',
      icono: 'home'
    },
    {
      titulo:'Mi perfil',
      url: '/menu/perfil',
      icono: 'person'
    },
    {
      titulo: 'Publicar receta',
      url: '/menu/home',
      icono: 'add-circle'
    },
    {
      titulo: 'Mis recetas',
      url: '/menu/entradas',
      icono: 'book'
    },
    {
      titulo:'Recetas favoritas',
      url: '/menu/favoritos',
      icono: 'heart'
    },
    {
      titulo:'Explorar',
      url: '/menu/explorar',
      icono: 'search'
    },
  ];

  constructor(public alertController: AlertController, public navCtrl: NavController) { }

  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i: number){
    this.indiceSeleccionado = i;
  }

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿De verdad quieres salir?',
      buttons:[
        {
          text: 'No, mejor no',
          handler: () => {

          }
        }, {
          text: 'Si',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
  }
}

