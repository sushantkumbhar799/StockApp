import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPurchaseComponent } from './components/new-purchase/new-purchase.component';
import { NewSaleComponent } from './components/new-sale/new-sale.component';
import { PurchaseListComponent } from './components/purchase-list/purchase-list.component';
import { SaleListComponent } from './components/sale-list/sale-list.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [ 

  {
    path:'newpurchase',
    component:NewPurchaseComponent
  },

  {
    path:'newsale',
    component:NewSaleComponent
  },

  {
    path:'purchaselist',
    component:PurchaseListComponent
  },

  {
    path:'salelist',
    component:SaleListComponent
  },

  {
    path:'stocklist',
    component:StockListComponent
  },

  {
    path:'dashboard',
    component:DashboardComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
