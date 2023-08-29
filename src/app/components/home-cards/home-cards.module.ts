import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeCardsRoutingModule } from './home-cards-routing.module';
import { HomeCardsComponent } from './home-cards.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { CardLabelComponent } from 'src/app/components/card/card-label/card-label.component';
import { CardPricingComponent } from 'src/app/components/card/card-pricing/card-pricing.component';
import { FormsModule } from '@angular/forms';
import { MensagemModule } from 'src/app/components/mensagem/mensagem.module';
// import { LoginComponent } from 'src/app/pages/home/login/login.component';

@NgModule({
  declarations: [
    HomeCardsComponent,
    CardComponent,
    CardLabelComponent,
    CardPricingComponent,
    // LoginComponent
  ],
  imports: [
    CommonModule,
    HomeCardsRoutingModule,
    FormsModule,
    MensagemModule,
  ],
  exports: [HomeCardsComponent]
})
export class HomeCardsModule { }
