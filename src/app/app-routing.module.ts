import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  // { 
  //   path: 'login', 
  //   component: LoginComponent 
  // },
  // {
  //   path: 'novousuario',
  //   loadChildren:() => import('./pages/novo-usuario/novo-usuario.module').then((m)=>m.NovoUsuarioModule),
  // },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home-cards',
    loadChildren: () => import('./components/home-cards/home-cards.module').then((m) => m.HomeCardsModule),
  },
  {
    path: 'jogos',
    loadChildren: () => import('./jogos/jogos.module').then((m) => m.JogosModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
