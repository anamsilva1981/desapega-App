import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { ButtonComponent } from '../../components/button/button.component';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { DonationItem } from '../../interfaces/product.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MenuComponent, ButtonComponent, MatTableModule, MatIconModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  displayedColumns: string[] = ['title', 'description', 'quantity', 'condition', 'status', 'images', 'createdAt'];
  dataSource: any;
  listProducts: DonationItem[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productService: ProductsService,
    // public dialog: MatDialog
  ){
    this.dataSource = new MatTableDataSource<any>(this.listProducts);
  }

  ngOnInit(){
    this.getAllProducts();
  }

  getAllProducts(){
  this.productService.getAllProducts().subscribe({
    next: (response: any) => {
      console.log('-- lista de products: ', response)
      this.listProducts = response;

      this.dataSource = new MatTableDataSource<any>(this.listProducts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.paginator._intl.itemsPerPageLabel="Itens por página";
    },
    error: (error: any) => {
      console.log('-- Error ao listar os produtos: ', error)
    }
  });
}

}


