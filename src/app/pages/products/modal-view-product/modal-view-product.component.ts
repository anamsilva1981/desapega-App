import { Component, Inject } from '@angular/core';
import { DonationItem } from '../../../interfaces/product.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-modal-view-product',
  standalone: true,
  imports: [ MatIconModule],
  templateUrl: './modal-view-product.component.html',
  styleUrl: './modal-view-product.component.scss'
})
export class ModalViewProductComponent {

  productData!: DonationItem;

   constructor(
    public dialogRef: MatDialogRef<ModalViewProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.productData = data;
    console.log('--- Dados do produto', this.productData )
  }

  closeModal(){this.dialogRef.close()}

}
