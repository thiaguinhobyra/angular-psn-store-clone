import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,  
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'novousuario',
        component: NovoUsuarioComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
