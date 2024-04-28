import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  {
    path: 'cart',
    component: CartComponent,
  },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'confirmation', component: OrderConfirmationComponent },
  { path: '**', redirectTo: '' },
];
