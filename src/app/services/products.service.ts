import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
// import { DonationItem } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private dataBaseStore: AngularFirestore
  ) { }

  getAllProducts(){
    return this.dataBaseStore.collection('products', product => product.orderBy('title')).valueChanges({idField: 'firebaseId'}) as Observable<any[]>;
  }

//   addUser(product: DonationItem){
//     return this.dataBaseStore.collection('products').add(product);
//   }

//   updateUser(productId: string, product: DonationItem){
//     return this.dataBaseStore.collection('products').doc(productId).update(product)
//   }

//   deleteUser(productId: string){
//     return this.dataBaseStore.collection('products').doc(productId).delete();
//   }
}
