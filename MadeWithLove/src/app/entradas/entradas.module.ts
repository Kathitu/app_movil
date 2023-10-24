import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradasPageRoutingModule } from './entradas-routing.module';

import { EntradasPage } from './entradas.page';
import { AlliService } from '../alli.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradasPageRoutingModule
  ],
  declarations: [EntradasPage],
  providers: [AlliService]
})
export class EntradasPageModule {}
