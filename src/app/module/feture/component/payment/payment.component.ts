import { Component } from '@angular/core';
import { AddressCardComponent } from '../../../shared/component/address-card/address-card.component';
import { CartItemComponent } from '../../../shared/component/cart-item/cart-item.component';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [AddressCardComponent,CartItemComponent,CommonModule,MatDividerModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  products=[1,1,1]

}
