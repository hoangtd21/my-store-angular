import { Component, Output } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [ProductItemComponent, NgFor],
})
export class ProductListComponent {
  @Output() products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
