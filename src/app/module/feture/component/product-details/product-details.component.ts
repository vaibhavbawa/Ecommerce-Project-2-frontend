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
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../state/Product/product.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../models/AppState';
import { CartService } from '../../../../state/Cart/cart.service';
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
  providers:[ProductService,CartService],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  selectedSize:any;
  reviews=[1,1,1];
  reletedProducts:any;
  products:any;
  productId:any;
  @Input() product:any

  constructor(
    private router:Router, 
    private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private store:Store<AppState>,
    private cartService:CartService
    ){}
  ngOnInit(){
    this.reletedProducts=womenGouns;
   const id = this.activatedRoute.snapshot.paramMap.get("id");

   this.productService.findProductById(id);
    this.productId=id;
   this.store.pipe(select(store=>store.product)).subscribe((product)=>{
    this.products=product.products
    console.log("Store data ",product.products)
  })
}

handleAddToCart(){
  console.log("selected size",this.selectedSize);
  const data={size:this.selectedSize,productId:this.productId}
  this.cartService.addItemToCart(data);
  this.cartService.getCart()
  this.router.navigate(['cart']);


}

  }

 

