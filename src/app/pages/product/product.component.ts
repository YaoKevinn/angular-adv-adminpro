import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from 'src/app/shared/dialogs/add-product-dialog/add-product-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor( public dialog:MatDialog ) { }

  ngOnInit(): void {
  }

  openAddProductModal() {
    this.dialog.open(AddProductDialogComponent, {
      panelClass: 'modal-container'
    })
  }

}
