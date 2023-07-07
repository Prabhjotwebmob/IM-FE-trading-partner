import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradingPartnerComponent } from './trading-partner/trading-partner.component';

const routes: Routes = [{
  path: '',
  component: TradingPartnerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradingPartnerRoutingModule { }
