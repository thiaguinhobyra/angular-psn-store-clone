import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';
import { JogoComponent } from './jogo/jogo.component';

const routes: Routes = [
  {
    path: '',
    component: ListaJogosComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogosRoutingModule { }
