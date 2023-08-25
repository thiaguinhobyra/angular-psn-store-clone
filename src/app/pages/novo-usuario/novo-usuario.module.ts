import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovoUsuarioRoutingModule } from './novo-usuario-routing.module';
import { NovoUsuarioComponent } from './novo-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from 'src/app/components/mensagem/mensagem.module';


@NgModule({
  declarations: [NovoUsuarioComponent],
  imports: [
    CommonModule,
    NovoUsuarioRoutingModule,
    ReactiveFormsModule,
    MensagemModule
  ]
})
export class NovoUsuarioModule { }
