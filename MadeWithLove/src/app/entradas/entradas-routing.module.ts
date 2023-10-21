import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntradasPage } from './entradas.page';

const routes: Routes = [
  {
    path: '',
    component: EntradasPage
  },
  {//ruta nieta
    path: 'entradas-detalle',
    loadChildren: () => import('../entradas-detalle/entradas-detalle.module').then( m => m.EntradasDetallePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntradasPageRoutingModule {}
