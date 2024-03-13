import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './module/shared/component/navbar/navbar.component';
import { HomeComponent } from './module/feture/component/home/home.component';
import { FooterComponent } from './module/shared/component/footer/footer.component';
import { ProductsComponent } from './module/feture/component/products/products.component';
import { ProductCardComponent } from './module/shared/component/product-card/product-card.component';
import { AdminComponent } from './module/admin/admin.component';
import { AuthComponent } from './module/auth/auth.component';
import { SigninComponent } from './module/auth/signin/signin.component';
import { SignupComponent } from './module/auth/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from './models/AppState';
import { UserService } from './state/User/user.service';
import { Store, select } from '@ngrx/store';
import { AuthService } from './state/Auth/auth.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    ProductCardComponent,
    AdminComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HttpClientModule,
  ],
  providers:[UserService,AuthService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce_demo_project';

  constructor(private router:Router, 
    private dialog:MatDialog, 
    private userService:UserService, 
    private store:Store<AppState>
    ){}

  ngOnInit(){
    if(localStorage.getItem("jwt")) this.userService.getUserProfile()
    this.store.pipe(select((store)=>store.auth)).subscribe((user)=>{
  console.log("user_app",user)
      this.userService.getUserProfile();
      console.log("store",this.store);
  })
  }
}
