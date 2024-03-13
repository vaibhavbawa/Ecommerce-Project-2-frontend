import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { filters, singleFilter } from './filterData';
import { CommonModule } from '@angular/common';
import { mensPantsPage1 } from '../../../../../Data/pants/menPants';
import { ProductCardComponent } from '../../../shared/component/product-card/product-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../state/Product/product.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../models/AppState';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    ProductCardComponent
  ],
  providers:[ProductService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  filterData:any
  singleFilterData:any
  menPants:any;
  products:any;
  lavelThree:any;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private productService:ProductService,
    private store:Store<AppState>
    ){}

  ngOnInit(){
    this.filterData=filters;
    this.singleFilterData=singleFilter;
    this.menPants=mensPantsPage1;
    

    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        this.lavelThree=params.get('lavelThree')
       var reqData={
        category:params.get('lavelThree'),
        colors:[],
        sizes:[],
        minPrice:0,
        maxPrice:10000,
        minDiscount:0,
        pageNumber:0,
        pageSize:10,
        stock:null
       };
      //  console.log("params",params);
       this.productService.findProductByCategory(reqData);
      }
    );

    this.activatedRoute.queryParams.subscribe((params)=>{
      const color=params["color"]
      const size=params['size']
      const price=params["price"]
      const discount=params['discount']
      const stock=params["stock"]
      const sort=params['sort']
      const pageNumber=params["pageNumber"]
      const minPrice=price?.split("-")[0];
      const maxPrice=price?.split("-")[1];

      var reqData={
        category: this.lavelThree,

      
        colors:color?[color].join(","):[],
        sizes:size,
        minPrice:minPrice?minPrice:0,
        maxPrice:discount?discount:1000000,
        minDiscount:discount?discount:0,
        pageNumber: pageNumber?pageNumber:0,
        pageSize:10,
        stock:null,
        sort:sort?sort:"price_low"
       };

       this.productService.findProductByCategory(reqData)
    })

      this.store.pipe(select((store) => store.product)).subscribe((product) => {
          this.products = product?.products?.content;
          console.log("Store data ",product.products.content)
        });
  }

  handleMultipleSelecteFilter(value:string, sectionId:string){
    const queryParams = {...this.activatedRoute.snapshot.queryParams};
    console.log("query params",queryParams);
    const filterValues = queryParams[sectionId]?queryParams[sectionId].split(','):[];
     
    const valueIndex = filterValues.indexOf(value);
    if(valueIndex!=-1){
      filterValues.splice(valueIndex,1);
    }else{
      filterValues.push(value);
    }
    if(filterValues.length>0){
      queryParams[sectionId]=filterValues.join(",")
    }else{
      delete queryParams[sectionId];
    }

    this.router.navigate([],{queryParams})
  }

  handleSingleSelectFilter(value:string, sectionId:string){
    const queryParams = {...this.activatedRoute.snapshot.queryParams};
    queryParams[sectionId]=value

    this.router.navigate([],{queryParams})
  }

  
}

