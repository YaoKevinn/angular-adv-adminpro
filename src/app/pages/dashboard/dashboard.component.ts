import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from 'src/app/shared/dialogs/add-product-dialog/add-product-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss'
  ]
})
export class DashboardComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }



}
