import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewPurchaseComponent } from './components/new-purchase/new-purchase.component';
import { NewSaleComponent } from './components/new-sale/new-sale.component';
import { SaleListComponent } from './components/sale-list/sale-list.component';
import { PurchaseListComponent } from './components/purchase-list/purchase-list.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewPurchaseComponent,
    NewSaleComponent,
    SaleListComponent,
    PurchaseListComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
