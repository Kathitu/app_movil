import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [{ 
      path: 'entradas',
      loadChildren: () => import('../entradas/entradas.module').then( m => m.EntradasPageModule)
    },
    {
      path: 'home',
      loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'home2',
      loadChildren: () => import('../home2/home2.module').then( m => m.Home2PageModule)
    },
    {
      path: 'favoritos',
      loadChildren: () => import('../favoritos/favoritos.module').then( m => m.FavoritosPageModule)
    },
    {
      path: 'explorar',
      loadChildren: () => import('../explorar/explorar.module').then( m => m.ExplorarPageModule)
    },
    {
      path: 'perfil',
      loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
    },]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
