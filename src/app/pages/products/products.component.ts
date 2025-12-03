import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { ButtonComponent } from '../../components/button/button.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { DonationItem } from '../../interfaces/product.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductsService } from '../../services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalViewProductComponent } from './modal-view-product/modal-view-product.component';
import { ModalFormProductComponent } from './modal-form-product/modal-form-product.component';
import { DatePipe, NgIf } from '@angular/common';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MenuComponent, ButtonComponent, MatTableModule, MatIconModule, MatPaginatorModule, MatSortModule, NgIf, DatePipe ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  displayedColumns: string[] = ['title', 'description', 'quantity', 'condition', 'status', 'images', 'createdAt', 'action'];
  dataSource: any;
  listProducts: DonationItem[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productService: ProductsService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<any>(this.listProducts);
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (response: any) => {
        console.log('-- lista de products: ', response)
        this.listProducts = response;

        this.dataSource = new MatTableDataSource<any>(this.listProducts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.paginator._intl.itemsPerPageLabel = "Itens por página";
      },
      error: (error: any) => {
        console.log('-- Error ao listar os produtos: ', error)
      }
    });
  }

    // Lógica do modal
  openModalViewProduct(product: DonationItem){
    this.dialog.open(ModalViewProductComponent, {
      width: '700px',
      height: '530px',
      data: product
    })
  }

  openModalAddProduct(){
    this.dialog.open(ModalFormProductComponent, {
      width: '700px',
      height: '530px',
    }).afterClosed().subscribe(() => this.getAllProducts());
  }

  openModalEditUser(product: DonationItem){
        this.dialog.open(ModalFormProductComponent, {
      width: '700px',
      height: '530px',
      data: product
    }).afterClosed().subscribe(() => this.getAllProducts());
  }

  deleteUser(firebaseId: string){
    this.productService.deleteProduct(firebaseId).then(
      (response: any) => {
        window.alert('Cadastro deletado com sucesso')
      }
    ).catch(
      (err: any) => {
        console.log('Erro ao realizar o cadastro', err)
        window.alert('Cadastro realizado com sucesso');
      });
     
    this.getAllProducts();
  }

  openImage(url: string) {
  window.open(url, '_blank');
}


}


