import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.css']
})
export class NewPurchaseComponent implements OnInit {

  purchaseobj:any={
    "purchaseId": 0,
    "purchaseDate": "2023-09-30T06:55:51.428Z",
    "productId": 0,
    "quantity": 0,
    "supplierName": "",
    "invoiceAmount": 0,
    "invoiceNo": ""
  }

  purchaselist:any[]=[]

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.Getallproducts();
  }
  Getallproducts(){
    this.http.get("https://freeapi.miniprojectideas.com/api/Inventory/GetAllProducts").subscribe((res:any)=>{
      this.purchaselist=res.data;
    })
  }
}
