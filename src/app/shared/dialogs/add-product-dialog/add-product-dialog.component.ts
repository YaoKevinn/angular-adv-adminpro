import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FileInput, FileValidator } from 'ngx-material-file-input';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent implements OnInit {

  transferFG: FormGroup;
  transferFG2: FormGroup;

  productName:AbstractControl;
  productDescription:AbstractControl;
  productCode:AbstractControl;
  company:AbstractControl;
  hotsaleType:AbstractControl;
  sellType:AbstractControl;
  category:AbstractControl;
  unit:AbstractControl;
  unitPrice:AbstractControl;
  hotsalePrice:AbstractControl;
  discountUnit:AbstractControl;
  discountPrice:AbstractControl;
  discountUnit2:AbstractControl;
  discountPrice2:AbstractControl;
  discountUnit3:AbstractControl;
  discountPrice3:AbstractControl;
  disponibility:AbstractControl;

  product:Product;
  imgUrl: String|ArrayBuffer;


  readonly maxSize = 51200;

  constructor( private fb: FormBuilder, public dialogRef:MatDialogRef<AddProductDialogComponent>) { }

  ngOnInit(): void {
    this.transferFG = this.fb.group({
      productName: ['' , [Validators.required]],
      productDescription: ['' , [Validators.required]],
      productCode: ['' , [Validators.required]],
      company: ['gfull' , [Validators.required]],
      hotsaleType: ['none', [Validators.required]],
      sellType: ['single' , [Validators.required]],
      category: ['' , [Validators.required]],
      unit: ['', [Validators.required]],
      unitPrice: [{value:0, disabled:false} , []],
      hotsalePrice: [{value:0, disabled:true}, []],
      discountUnit: [{value:0, disabled:true}, []],
      discountPrice: [{value:0, disabled:true} , []],
      discountUnit2: [{value:0, disabled:true}, []],
      discountPrice2: [{value:0, disabled:true}, []],
      discountUnit3: [{value:0, disabled:true}, []],
      discountPrice3: [{value:0, disabled:true}, []],
      disponibility: [true, []],
      imgFile: [undefined, [Validators.required, FileValidator.maxContentSize(this.maxSize)]]
    });

    this.transferFG2 = this.fb.group({
      file: []
    })

    this.productName = this.transferFG.get("productName");
    this.productDescription = this.transferFG.get("productDescription");
    this.productCode = this.transferFG.get("productCode");
    this.company = this.transferFG.get("company");
    this.hotsaleType = this.transferFG.get("hotsaleType");
    this.sellType = this.transferFG.get("sellType");
    this.category = this.transferFG.get("category");
    this.unit = this.transferFG.get("unit");
    this.unitPrice = this.transferFG.get("unitPrice");
    this.hotsalePrice = this.transferFG.get("hotsalePrice");
    this.discountUnit = this.transferFG.get("discountUnit");
    this.discountPrice = this.transferFG.get("discountPrice");
    this.discountUnit2 = this.transferFG.get("discountUnit2");
    this.discountPrice2 = this.transferFG.get("discountPrice2");
    this.discountUnit3 = this.transferFG.get("discountUnit3");
    this.discountPrice3 = this.transferFG.get("discountPrice3");
    this.disponibility = this.transferFG.get("disponibility");

    const file_form = this.transferFG.get('imgFile');
    file_form.valueChanges.subscribe( data => {
      if (data) {
        console.log(data.files[0]);
        var reader = new FileReader();
        const imagePath = data.files;
        reader.readAsDataURL(imagePath[0]);
        reader.onload = (_event) => {
          this.imgUrl = reader.result;
        }
      }
    })

    this.hotsaleType.valueChanges.subscribe( value => {
      if (value === 'limited' || value === 'hotsale'){
        this.hotsalePrice.enable();
      }else {
        this.hotsalePrice.disable();
      }
    })

    this.sellType.valueChanges.subscribe( value => {
      if ( value !== 'single' ) {
        this.discountUnit.enable();
        this.discountPrice.enable();
        this.discountUnit2.enable();
        this.discountPrice2.enable();
        this.discountUnit3.enable();
        this.discountPrice3.enable();
      } else {
        this.discountUnit.disable();
        this.discountPrice.disable();
        this.discountUnit2.disable();
        this.discountPrice2.disable();
        this.discountUnit3.disable();
        this.discountPrice3.disable();
      }
    })
  }

  slideToggleChanged() {
    console.log();
  }

  confirmAddProduct() {
    const newProduct: Product = {
      name: this.productName.value,
      description: this.productDescription.value,
      code: this.productCode.value,
      company: this.company.value,
      hotsaleType: this.hotsaleType.value,
      sellType: this.sellType.value,
      category: this.category.value,
      unit: this.unit.value,
      unitPrice: this.unitPrice.value,
      hotsalePrice: this.hotsalePrice.value,
      discountUnit: this.discountUnit.value,
      discountPrice: this.discountPrice.value,
      discountUnit2: this.discountUnit2.value,
      discountPrice2: this.discountPrice2.value,
      discountUnit3: this.discountUnit3.value,
      discountPrice3: this.discountPrice3.value,
      disponibility: this.disponibility.value,
    }

    console.log(newProduct);
  }


}
