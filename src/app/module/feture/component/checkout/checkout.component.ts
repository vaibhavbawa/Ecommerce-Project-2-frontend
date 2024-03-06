import { Component } from '@angular/core';
import { AddressformComponent } from './addressform/addressform.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [AddressformComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

}
