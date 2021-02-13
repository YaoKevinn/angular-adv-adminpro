import { AddCategoryDialogComponent } from './../../shared/dialogs/add-category-dialog/add-category-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddCategoryModal() {
    this.dialog.open(AddCategoryDialogComponent, {
      panelClass: 'modal-container',
      height: '70%',
      width: '50%'
    })
  }
}
