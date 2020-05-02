// Angular
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// Material
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Product {
  name: string;
  cost: number;
}

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.component.html',
  styleUrls: ['./edit-product-page.component.scss']
})
export class EditProductPageComponent implements OnInit {

  isBeingSave: boolean = false;
  name = new FormControl('', [Validators.required]);
  cost = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<EditProductPageComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product
  ) { }

  ngOnInit(): void {
    console.log(this.product);
  }

  getErrorMessageForName() {
    return this.name.hasError('required') ? 'por favor ingresa un valor.' : '';
  }

  getErrorMessageForCost() {
    return this.cost.hasError('required') ? 'por favor ingresa un valor.' : '';
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(event);
    this.isBeingSave = true;
  }

}
