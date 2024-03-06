import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './module/shared/component/navbar/navbar.component';
import { HomeComponent } from './module/feture/component/home/home.component';
import { FooterComponent } from './module/shared/component/footer/footer.component';
import { ProductsComponent } from './module/feture/component/products/products.component';
import { ProductCardComponent } from './module/shared/component/product-card/product-card.component';
import { AdminComponent } from './module/admin/admin.component';


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
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce_demo_project';
}
