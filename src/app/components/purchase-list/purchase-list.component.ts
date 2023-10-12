import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {

  purchaselist:any[]=[];
    constructor(private http:HttpClient){

    }

    ngOnInit(): void {
      this.loadpurchase();
    }

    loadpurchase(){
      this.http.get("https://freeapi.miniprojectideas.com/api/Inventory/GetAllPurchase").subscribe((res:any)=>{
        this.purchaselist = res.data;
      })
    }


}
