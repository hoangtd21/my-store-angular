import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from '../../model/cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cart: Cart[] = [];
  total: number = 0;
  value: number = 0;

  name: string = '';
  address: string = '';
  card: number = 0;

  isNumber!: boolean;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cart = this.cartService.getProducts();

    this.total = this.cartService.value;
    this.value = this.cartService.value;
  }

  handleUpdateQuantity() {
    this.cartService.updateQuantity();
    this.total = this.cartService.value;
  }

  handleSubmit() {
    this.cartService.name = this.name;
    this.router.navigate(['/confirmation']);
  }

  handleRemove(product: any) {
    this.cart.splice(this.cart.indexOf(product), 1);

    this.cartService.updateQuantity();
    this.total = this.cartService.value;
  }

  ngOnChanges(input: number): void {
    if (isNaN(input)) {
      this.isNumber = false;
    } else {
      this.isNumber = true;
    }
  }
}
