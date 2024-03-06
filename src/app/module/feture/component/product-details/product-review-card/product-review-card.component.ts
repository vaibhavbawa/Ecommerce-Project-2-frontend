import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StartRatingComponent } from '../../../../shared/component/start-rating/start-rating.component';

@Component({
  selector: 'app-product-review-card',
  standalone: true,
  imports: [
    CommonModule,
    StartRatingComponent
  ],
  templateUrl: './product-review-card.component.html',
  styleUrl: './product-review-card.component.scss'
})
export class ProductReviewCardComponent {
   
}
