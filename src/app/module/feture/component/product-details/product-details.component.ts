import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { ProductReviewCardComponent } from './product-review-card/product-review-card.component';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProductCardComponent } from '../../../shared/component/product-card/product-card.component';
import { womenGouns } from '../../../../../Data/Gouns/gouns';
import { StartRatingComponent } from '../../../shared/component/start-rating/start-rating.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    ProductReviewCardComponent,
    CommonModule,
    MatProgressBarModule,
    ProductCardComponent,
    StartRatingComponent
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  selectedSize:any;
  reviews=[1,1,1];
  reletedProducts:any;
  @Input() product:any

  constructor(private router:Router){}
  ngOnInit(){
    this.reletedProducts=womenGouns;
  }

  handleAddToCart(){
    console.log("selected size",this.selectedSize);
    this.router.navigate(['cart']);
  }
}
