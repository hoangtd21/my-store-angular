import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css',
})
export class OrderConfirmationComponent {
  name: string = '';
  value: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.name = this.cartService.name;
    this.value = this.cartService.value;
    this.cartService.clearCart();
  }
}
