import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product!: Product;
  id!: number;
  selectQuantity: number = 1;
  productAdded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = parseInt(params['id']);
    });

    this.productService.getProducts().subscribe((data) => {
      this.product = data.filter(
        (product: Product) => product.id === this.id
      )[0];
    });
  }

  handleAddToCart() {
    this.cartService.addToCart(this.product, this.selectQuantity);
    this.productAdded = true;
    alert('Added to cart!');

    // setTimeout(() => {
    //   this.productAdded = false;
    // }, 1500);
  }
}
