import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HomeProductCardComponent } from '../home-product-card/home-product-card.component';

@Component({
  selector: 'app-home-product-slider',
  standalone: true,
  imports: [CommonModule,HomeProductCardComponent],
  templateUrl: './home-product-slider.component.html',
  styleUrl: './home-product-slider.component.scss'
})
export class HomeProductSliderComponent {
  @Input() title:any;
  @Input() products:any;
}
