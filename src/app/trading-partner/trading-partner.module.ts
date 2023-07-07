import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradingPartnerRoutingModule } from './trading-partner-routing.module';
import { TradingPartnerComponent } from './trading-partner/trading-partner.component';


@NgModule({
  declarations: [
    TradingPartnerComponent
  ],
  imports: [
    CommonModule,
    TradingPartnerRoutingModule
  ]
})
export class TradingPartnerModule { }
