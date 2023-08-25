import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogosRoutingModule } from './jogos-routing.module';
import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';


@NgModule({
  declarations: [
    ListaJogosComponent
  ],
  imports: [
    CommonModule,
    JogosRoutingModule
  ]
})
export class JogosModule { }
