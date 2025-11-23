import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { DonationItem } from '../interfaces/product.interface';
// import { DonationItem } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private dataBaseStore: AngularFirestore
  ) { }

  getAllProducts(){
    return this.dataBaseStore.collection('product', product => product.orderBy('title')).valueChanges({idField: 'firebaseId'}) as Observable<any[]>;
  }

  addProduct(product: DonationItem){
    return this.dataBaseStore.collection('product').add(product);
  }

  updateProduct(productId: string, product: DonationItem){
    return this.dataBaseStore.collection('product').doc(productId).update(product)
  }

  deleteProduct(productId: string){
    return this.dataBaseStore.collection('product').doc(productId).delete();
  }
}
