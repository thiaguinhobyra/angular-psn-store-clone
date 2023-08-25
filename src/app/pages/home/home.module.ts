import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { CardLabelComponent } from 'src/app/components/card/card-label/card-label.component';
import { CardPricingComponent } from 'src/app/components/card/card-pricing/card-pricing.component';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { MensagemModule } from 'src/app/components/mensagem/mensagem.module';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    CardLabelComponent,
    CardPricingComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
