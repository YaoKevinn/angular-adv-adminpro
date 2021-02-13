import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() product:any;
  quantity:number = 1;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.product)
  }

  quantityBtnClicked(type:string) {
    if ( type === 'add') {
      this.quantity += 1;
    } else if (this.quantity > 1){
      this.quantity -= 1;
    }
  }

}
