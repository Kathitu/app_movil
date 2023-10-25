import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CardEntradaComponent } from './card-entrada/card-entrada.component';
import { CardFeedComponent } from './card-feed/card-feed.component';



@NgModule({
  declarations: [CardEntradaComponent, CardFeedComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [CardEntradaComponent, CardFeedComponent]
})
export class ModuloComponentesModule { }
