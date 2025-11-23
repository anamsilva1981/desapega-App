import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from '../../../services/products.service';
import { DonationItem } from '../../../interfaces/product.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-modal-form-product',
  standalone: true,
  imports: [ MatIconModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule ],
  templateUrl: './modal-form-product.component.html',
  styleUrls: ['./modal-form-product.component.scss']
})
export class ModalFormProductComponent {

formProduct!: FormGroup;
  editProduct: boolean = false;
 
  constructor(
    public dialogRef: MatDialogRef<ModalFormProductComponent>,
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(){
    this.buildForm();
    if(this.data && this.data.title){
      this.editProduct = true;
    }
  }

  saveProduct(){
    const objectUserForm: DonationItem = this.formProduct.getRawValue();

    if(this.data && this.data.title){
      
      this.productService.updateProduct(this.data.firebaseId, objectUserForm).then(
      (response: any) => {
        window.alert('Produto editado com sucesso');
        this.closeModal();
      }
    )

    } else {
    
    this.productService.addProduct(objectUserForm).then(
      (response: any) => {
        window.alert('Produto salvo com sucesso');
        this.closeModal();
      }
    ).catch(
      (err: any) => {
        console.log('Erro ao cadastrar Produto', err)
        window.alert('Produto salvo com sucesso');
      });
    } 
  }
  
  buildForm(){
    this.formProduct = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      category: [null],
      condition: [null],
      status: [null],
      quantity: [null, [Validators.required]],
      images: [null],
      ownerId: [null],
      nickName: [null],
      createdAt: [null],
    })

    if(this.data && this.data.title){
      this.fillForm();
    }
  }

  fillForm(){
    this.formProduct.patchValue({
      title: this.data.title,
      description: this.data.description,
      category: this.data.category,
      condition: this.data.condition,
      status: this.data.status,
      quantity: this.data.quantity,
      images: this.data.images,
      ownerId: this.data.ownerId,
      nickName: this.data.nickName,
      createdAt: this.data.createdAt,
    });
  }

  closeModal(){ 
    this.dialogRef.close()
  }
}
