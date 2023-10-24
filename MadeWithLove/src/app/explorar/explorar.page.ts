import { Component, OnInit } from '@angular/core';
import { AlliService } from '../alli.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})
export class ExplorarPage implements OnInit {
  
  usuarios: any[] = [];

  constructor(public navCtrl: NavController, public service: AlliService) {}

  ionViewDidLoad() {
    this.service.obtenerDatos()
      .subscribe(
        (data: any) => {
          this.usuarios = data;
        },
        (error) => {
          console.log(error);
        }
      )
  }

  ngOnInit() {
  }
}

