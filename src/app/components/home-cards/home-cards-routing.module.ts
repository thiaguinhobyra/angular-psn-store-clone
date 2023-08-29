import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCardsComponent } from './home-cards.component';
import { LoginComponent } from 'src/app/pages/home/login/login.component';
import { NovoUsuarioComponent } from 'src/app/pages/home/novo-usuario/novo-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeCardsComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'novousuario',
        component: NovoUsuarioComponent,
      },
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeCardsRoutingModule { }
