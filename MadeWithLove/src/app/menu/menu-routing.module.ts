import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [ //Rutas hijas
    {
      path: 'home2',
      loadChildren: () => import('../home2/home2.module').then( m => m.Home2PageModule)
    },
    {
      path: 'perfil',
      loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
    },
    {
      path: 'home',
      loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    },  
    {
      path: 'entradas',
      loadChildren: () => import('../entradas/entradas.module').then( m => m.EntradasPageModule)
    },
    {
      path: 'favoritos',
      loadChildren: () => import('../favoritos/favoritos.module').then( m => m.FavoritosPageModule)
    },
    {
      path: 'explorar',
      loadChildren: () => import('../explorar/explorar.module').then( m => m.ExplorarPageModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
