import { Component } from '@angular/core';
import { CartItemComponent } from '../../../shared/component/cart-item/cart-item.component';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../../../state/Cart/cart.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../models/AppState';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CartItemComponent,
    CommonModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers:[CartService],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart = [1, 1, 1];
  cartItems:any;
  constructor(
    private router: Router, 
    private cartService: CartService, 
    private store: Store<AppState>
    ) { }

  ngOnInit() {
    this.cartService.getCart();

    this.store.pipe(select(store => store.cart)).subscribe((cart) => {
      this.cartItems = cart.cartItems;
      console.log("CartStore ", cart.cartItems)
    })
  }

  navigateTocheckout() {
    this.router.navigate(['checkout'])
  }

}
