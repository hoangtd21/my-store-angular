import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product } from '../../model/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [FormsModule, RouterModule, NgIf],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product!: Product;
  selectQuantity: number = 1;
  productAdded: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  handleAddToCart() {
    this.cartService.addToCart(this.product, this.selectQuantity);
    this.productAdded = true;
    setTimeout(() => {
      this.productAdded = false;
    }, 1500);
  }
}
