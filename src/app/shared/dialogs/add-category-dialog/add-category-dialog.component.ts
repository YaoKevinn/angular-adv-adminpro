import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.scss']
})
export class AddCategoryDialogComponent implements OnInit {

  transferFG: FormGroup;

  chCategoryName: AbstractControl;
  espCategoryName: AbstractControl;
  company: AbstractControl;

  constructor( public dialogRef:MatDialogRef<AddCategoryDialogComponent>, public fb:FormBuilder) { }

  ngOnInit(): void {
    this.transferFG = this.fb.group({
      chName: ["", [Validators.required]],
      espName: ["", [Validators.required]],
      company: ["gfull", [Validators.required]]
    })

    this.chCategoryName = this.transferFG.get('chName');
    this.espCategoryName = this.transferFG.get('espName');
    this.company = this.transferFG.get('company');
  }

  confirmAddProduct() {
    const newCategory = {
      chName: this.chCategoryName.value,
      espName: this.espCategoryName.value,
      company: this.company.value
    }
    console.log(newCategory);
    this.dialogRef.close();
  }
  closeAddCategoryModal() {
    this.dialogRef.close();
  }
}
