import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'jogos',
    loadChildren: () => import('./jogos/jogos.module').then((m) => m.JogosModule),
  },
  {
    path: 'home-cards',
    loadChildren: () => import('./components/home-cards/home-cards.module').then((m) => m.HomeCardsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
